import fs from 'node:fs';
import crypto from 'node:crypto';
import http from 'node:http';
import path from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 4174);
const types = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'text/javascript',
};

const clients = new Map();

function sendFrame(socket, payload) {
  const data = Buffer.from(JSON.stringify(payload));
  const header = data.length < 126
    ? Buffer.from([0x81, data.length])
    : Buffer.from([0x81, 126, data.length >> 8, data.length & 255]);
  socket.write(Buffer.concat([header, data]));
}

function broadcast(payload, exceptId = null) {
  clients.forEach((client, id) => {
    if (id !== exceptId) sendFrame(client.socket, payload);
  });
}

function parseFrame(buffer) {
  if (buffer.length < 6) return null;
  let length = buffer[1] & 127;
  let offset = 2;
  if (length === 126) {
    if (buffer.length < 8) return null;
    length = buffer.readUInt16BE(2);
    offset = 4;
  }
  if (length > 65535 || buffer.length < offset + 4 + length) return null;
  const mask = buffer.subarray(offset, offset + 4);
  const data = buffer.subarray(offset + 4, offset + 4 + length);
  for (let i = 0; i < data.length; i += 1) {
    data[i] ^= mask[i % 4];
  }
  try {
    return JSON.parse(data.toString('utf8'));
  } catch {
    return null;
  }
}

const server = http.createServer((req, res) => {
    const urlPath = decodeURI(req.url.split('?')[0]);
    const filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath);

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      res.writeHead(200, {
        'Content-Type': types[path.extname(filePath)] || 'application/octet-stream',
      });
      res.end(data);
    });
  });

server.on('upgrade', (req, socket) => {
  if (req.url !== '/multiplayer') {
    socket.destroy();
    return;
  }

  const key = req.headers['sec-websocket-key'];
  const accept = crypto
    .createHash('sha1')
    .update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`)
    .digest('base64');
  socket.write([
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${accept}`,
    '',
    '',
  ].join('\r\n'));

  const id = crypto.randomUUID();
  clients.set(id, { socket, player: null });
  sendFrame(socket, { type: 'welcome', id });
  broadcast({ type: 'peer-count', count: clients.size });

  socket.on('data', (buffer) => {
    const message = parseFrame(buffer);
    if (!message) return;
    const client = clients.get(id);
    if (message.type === 'join') {
      client.player = { id, name: message.name, carTypeId: message.carTypeId };
      sendFrame(socket, {
        type: 'players',
        players: [...clients.values()].map((item) => item.player).filter(Boolean),
      });
    }
    broadcast({ ...message, id }, id);
  });

  socket.on('close', () => {
    clients.delete(id);
    broadcast({ type: 'leave', id });
    broadcast({ type: 'peer-count', count: clients.size });
  });

  socket.on('error', () => {
    clients.delete(id);
    broadcast({ type: 'leave', id });
    broadcast({ type: 'peer-count', count: clients.size });
  });
});

server
  .listen(port, '0.0.0.0', () => {
    console.log(`http://127.0.0.1:${port}`);
  });
