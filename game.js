const WORLD_WIDTH = 2400;
const WORLD_HEIGHT = 2400;
const CAR_RADIUS = 42;
const CRASH_MAX_BOOSTS = 3;
const BUMPERS_MAX_BOOSTS = 5;
const BOOST_REFILL_SECONDS = 10;
const BUMPERS_PLATFORM_EDGE = 70;
const BUMPERS_ELIMINATION_CREDIT_SECONDS = 12;
const POWERUP_RADIUS = 34;
const POWERUP_LIMIT = 4;
const POWERUP_SPAWN_SECONDS = 5;
const POWERUP_TYPES = [
  { id: 'slam', name: 'Mega Hit', color: '#ffcc33', duration: 10, knockback: 4.4 },
  { id: 'pulse', name: 'Shockwave', color: '#66ffa3', duration: 0, knockback: 1 },
  { id: 'charge', name: 'Boost Charge', color: '#00b5ff', duration: 5, knockback: 1.35 },
];
const BUMPERS_MAPS = [
  {
    id: 'cloud-deck',
    name: 'Cloud Deck',
    sky: ['#5fb8f4', '#b5e4ff', '#e8f7ff', '#f8fbff'],
    platform: ['#59616a', '#3b424a', '#232931'],
    accent: '#66ffa3',
    stripe: '#ffd64f',
    haze: 'rgba(255,255,255,0.38)',
  },
  {
    id: 'sunset-spire',
    name: 'Sunset Spire',
    sky: ['#ff9f6e', '#ffc778', '#ffe5bf', '#f8fbff'],
    platform: ['#6d5b53', '#4b4546', '#262a32'],
    accent: '#ff8d42',
    stripe: '#f7f7f2',
    haze: 'rgba(255,214,155,0.34)',
  },
  {
    id: 'storm-rig',
    name: 'Storm Rig',
    sky: ['#26364e', '#4d647c', '#9bb4c7', '#dbe8ef'],
    platform: ['#4a535e', '#303842', '#171d25'],
    accent: '#00b5ff',
    stripe: '#ffcc33',
    haze: 'rgba(190,220,240,0.28)',
  },
  {
    id: 'aurora-pad',
    name: 'Aurora Pad',
    sky: ['#101a35', '#234c70', '#57a0a9', '#d7f3ec'],
    platform: ['#53606b', '#343d49', '#181f2a'],
    accent: '#b56cff',
    stripe: '#66ffa3',
    haze: 'rgba(102,255,163,0.18)',
  },
];
const CRASH_MAPS = [
  {
    id: 'midnight-yard',
    name: 'Midnight Yard',
    floor: ['#252a31', '#101216'],
    border: 'rgba(255,255,255,0.16)',
    accent: 'rgba(255,204,51,0.24)',
    grid: 'rgba(255,255,255,0.045)',
    obstacleColor: '#5d6570',
    layout: 'classic',
  },
  {
    id: 'neon-docks',
    name: 'Neon Docks',
    floor: ['#18242a', '#090f12'],
    border: 'rgba(102,255,163,0.24)',
    accent: 'rgba(0,181,255,0.3)',
    grid: 'rgba(102,255,163,0.055)',
    obstacleColor: '#2f6bff',
    layout: 'lanes',
  },
  {
    id: 'scrap-ring',
    name: 'Scrap Ring',
    floor: ['#342d28', '#14110f'],
    border: 'rgba(255,141,66,0.22)',
    accent: 'rgba(255,204,51,0.28)',
    grid: 'rgba(255,255,255,0.04)',
    obstacleColor: '#7d8794',
    layout: 'ring',
  },
  {
    id: 'ice-vault',
    name: 'Ice Vault',
    floor: ['#263f4c', '#101820'],
    border: 'rgba(210,240,255,0.24)',
    accent: 'rgba(181,108,255,0.24)',
    grid: 'rgba(210,240,255,0.055)',
    obstacleColor: '#8fb7c9',
    layout: 'cross',
  },
  {
    id: 'solar-foundry',
    name: 'Solar Foundry',
    floor: ['#3b2a22', '#120d0b'],
    border: 'rgba(255,204,51,0.22)',
    accent: 'rgba(255,47,84,0.24)',
    grid: 'rgba(255,141,66,0.055)',
    obstacleColor: '#c96a36',
    layout: 'pillars',
  },
  {
    id: 'metro-tunnel',
    name: 'Metro Tunnel',
    floor: ['#292d35', '#0d1016'],
    border: 'rgba(247,247,242,0.18)',
    accent: 'rgba(0,181,255,0.22)',
    grid: 'rgba(247,247,242,0.045)',
    obstacleColor: '#6f7b8a',
    layout: 'diagonal',
  },
  {
    id: 'toxic-plant',
    name: 'Toxic Plant',
    floor: ['#223324', '#08110a'],
    border: 'rgba(102,255,163,0.2)',
    accent: 'rgba(255,204,51,0.22)',
    grid: 'rgba(102,255,163,0.05)',
    obstacleColor: '#5ea657',
    layout: 'clusters',
  },
  {
    id: 'royal-plaza',
    name: 'Royal Plaza',
    floor: ['#2f2a3f', '#11101a'],
    border: 'rgba(181,108,255,0.24)',
    accent: 'rgba(247,247,242,0.2)',
    grid: 'rgba(181,108,255,0.05)',
    obstacleColor: '#8c77b8',
    layout: 'diamonds',
  },
  {
    id: 'desert-outpost',
    name: 'Desert Outpost',
    floor: ['#3a3024', '#15100b'],
    border: 'rgba(255,141,66,0.2)',
    accent: 'rgba(255,204,51,0.24)',
    grid: 'rgba(255,214,79,0.045)',
    obstacleColor: '#9b7a55',
    layout: 'open',
  },
  {
    id: 'cyber-grid',
    name: 'Cyber Grid',
    floor: ['#172337', '#070b14'],
    border: 'rgba(0,181,255,0.24)',
    accent: 'rgba(181,108,255,0.28)',
    grid: 'rgba(0,181,255,0.06)',
    obstacleColor: '#315ee8',
    layout: 'maze',
  },
];
const COLORS = ['#00b5ff', '#ff2f54', '#ffcc33', '#66ffa3', '#b56cff', '#ff8d42', '#f7f7f2'];
const BOT_NAMES = ['Razor', 'Nitro', 'Vex', 'Crash', 'Bolt', 'Rogue'];
const CAR_TYPES = [
  { id: 'comet', name: 'Comet', color: '#00b5ff', health: 180, speed: 1.16, handling: 1.12, boost: 1.18, size: 0.92, shape: 'sport' },
  { id: 'rhino', name: 'Rhino', color: '#ff2f54', health: 290, speed: 0.86, handling: 0.82, boost: 0.92, size: 1.18, shape: 'truck' },
  { id: 'viper', name: 'Viper', color: '#66ffa3', health: 165, speed: 1.25, handling: 1.04, boost: 1.22, size: 0.88, shape: 'wedge' },
  { id: 'phantom', name: 'Phantom', color: '#b56cff', health: 210, speed: 1.03, handling: 1.24, boost: 1.05, size: 0.96, shape: 'coupe' },
  { id: 'bulldog', name: 'Bulldog', color: '#ff8d42', health: 260, speed: 0.94, handling: 0.94, boost: 1.0, size: 1.08, shape: 'muscle' },
  { id: 'falcon', name: 'Falcon', color: '#f7f7f2', health: 175, speed: 1.2, handling: 1.18, boost: 1.1, size: 0.9, shape: 'racer' },
  { id: 'titan', name: 'Titan', color: '#7d8794', health: 330, speed: 0.78, handling: 0.72, boost: 0.85, size: 1.26, shape: 'armored' },
  { id: 'spark', name: 'Spark', color: '#ffcc33', health: 155, speed: 1.1, handling: 1.38, boost: 1.34, size: 0.82, shape: 'compact' },
  { id: 'reaper', name: 'Reaper', color: '#d51525', health: 220, speed: 1.08, handling: 1.0, boost: 1.16, size: 1.0, shape: 'blade' },
  { id: 'nova', name: 'Nova', color: '#2f6bff', health: 195, speed: 1.12, handling: 1.08, boost: 1.28, size: 0.94, shape: 'hyper' },
];

const screens = {
  setup: document.getElementById('setupScreen'),
  game: document.getElementById('gameScreen'),
  results: document.getElementById('resultsScreen'),
};

const playerName = document.getElementById('playerName');
const playerCount = document.getElementById('playerCount');
const carChooser = document.getElementById('carChooser');
const modeButtons = [...document.querySelectorAll('[data-mode]')];
const matchButtons = [...document.querySelectorAll('[data-match-type]')];
const startGameButton = document.getElementById('startGameButton');
const onlineStatus = document.getElementById('onlineStatus');
const driverName = document.getElementById('driverName');
const healthDisplay = document.getElementById('runTimer');
const aliveDisplay = document.getElementById('driftScore');
const restartRunButton = document.getElementById('restartRunButton');
const finishRunButton = document.getElementById('finishRunButton');
const boostButton = document.getElementById('boostButton');
const boostHud = document.getElementById('boostHud');
const winnerName = document.getElementById('winnerName');
const winnerScore = document.getElementById('winnerScore');
const leaderboard = document.getElementById('leaderboard');
const playAgainButton = document.getElementById('playAgainButton');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let viewWidth = 390;
let viewHeight = 844;
let renderScaleX = 3;
let renderScaleY = 3;

const keys = {
  left: false,
  right: false,
  gas: false,
  brake: false,
  boost: false,
};

let cars = [];
let selectedCarTypeId = CAR_TYPES[0].id;
let selectedMode = 'crash';
let selectedMatchType = 'bots';
let selectedCrashMap = CRASH_MAPS[0];
let selectedBumpersMap = BUMPERS_MAPS[0];
let animationFrame = 0;
let lastFrame = 0;
let battleStartedAt = 0;
let battleActive = false;
let particles = [];
let tireMarks = [];
let obstacles = [];
let powerUps = [];
let nextPowerUpAt = 0;
let onlineSocket = null;
let onlineId = null;
let onlinePeers = new Map();
let lastOnlineSync = 0;
let waitingForOnlineStart = false;
let matchCountdown = 0;
let matchCountdownActive = false;
let countdownStartedAt = 0;

function getMaxBoosts() {
  return selectedMode === 'bumpers' ? BUMPERS_MAX_BOOSTS : CRASH_MAX_BOOSTS;
}

function pickBumpersMap() {
  selectedBumpersMap = BUMPERS_MAPS[Math.floor(Math.random() * BUMPERS_MAPS.length)];
}

function pickCrashMap() {
  selectedCrashMap = CRASH_MAPS[Math.floor(Math.random() * CRASH_MAPS.length)];
}

function getSpawnPoints() {
  return [
    { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT - 360, angle: 0 },
    { x: WORLD_WIDTH / 2, y: 360, angle: Math.PI },
    { x: 360, y: WORLD_HEIGHT / 2, angle: Math.PI / 2 },
    { x: WORLD_WIDTH - 360, y: WORLD_HEIGHT / 2, angle: -Math.PI / 2 },
    { x: 480, y: 480, angle: Math.PI * 0.75 },
    { x: WORLD_WIDTH - 480, y: WORLD_HEIGHT - 480, angle: -Math.PI * 0.25 },
    { x: WORLD_WIDTH - 480, y: 480, angle: -Math.PI * 0.75 },
  ];
}

function resetControls() {
  Object.keys(keys).forEach((key) => {
    keys[key] = false;
  });
  document.querySelectorAll('[data-control]').forEach((button) => {
    button.classList.remove('is-held');
  });
}

function getRequiredOnlinePlayers() {
  return getEnemyCount() + 1;
}

function getOnlinePlayerCount() {
  const ids = new Set(onlinePeers.keys());
  if (onlineId) ids.add(onlineId);
  return ids.size;
}

function hasEnoughOnlinePlayers() {
  return getOnlinePlayerCount() >= getRequiredOnlinePlayers();
}

function isOnlineWarmup() {
  return selectedMatchType === 'online' && waitingForOnlineStart && !screens.game.classList.contains('hidden');
}

function isOnlineCountdown() {
  return matchCountdownActive && !screens.game.classList.contains('hidden');
}

function isOnlinePreMatch() {
  return isOnlineWarmup() || isOnlineCountdown();
}

function isFrozenCountdown() {
  return matchCountdownActive && !waitingForOnlineStart;
}

function getEnemyCount() {
  return Number(playerCount.value) === 1 ? 1 : 3;
}

function updateOpponentSelector() {
  if (!playerCount) return;
  if (!['1', '3'].includes(playerCount.value)) {
    playerCount.value = '3';
  }
  playerCount.disabled = false;
  playerCount.title = 'Choose 1v1 or 4 cars.';
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add('hidden'));
  screens[name].classList.remove('hidden');
}

function renderCarChooser() {
  if (!carChooser) return;
  carChooser.innerHTML = '';

  CAR_TYPES.forEach((type) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = type.id === selectedCarTypeId ? 'active' : '';
    button.innerHTML = `
      <span class="car-swatch car-swatch-${type.shape}" style="--car-color: ${type.color}"></span>
      <strong>${type.name}</strong>
      <small>HP ${type.health} • SPD ${Math.round(type.speed * 100)}</small>
    `;
    button.addEventListener('click', () => {
      selectedCarTypeId = type.id;
      renderCarChooser();
    });
    carChooser.appendChild(button);
  });
}

function setupModeButtons() {
  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedMode = button.dataset.mode || 'crash';
      modeButtons.forEach((item) => item.classList.toggle('active', item === button));
      updateOpponentSelector();
      updateOnlineStatus();
    });
  });
}

function setupMatchButtons() {
  matchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedMatchType = button.dataset.matchType || 'bots';
      matchButtons.forEach((item) => item.classList.toggle('active', item === button));
      if (selectedMatchType === 'online') connectOnline();
      if (selectedMatchType !== 'online') waitingForOnlineStart = false;
      updateOnlineStatus();
    });
  });
}

function connectOnline() {
  if (onlineSocket && onlineSocket.readyState <= WebSocket.OPEN) return;
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  onlineSocket = new WebSocket(`${protocol}//${window.location.host}/multiplayer`);
  updateOnlineStatus('Connecting...');

  onlineSocket.addEventListener('open', () => {
    sendOnlineJoin();
    updateOnlineStatus();
    maybeStartOnlineMatch();
  });

  onlineSocket.addEventListener('message', (event) => {
    handleOnlineMessage(JSON.parse(event.data));
  });

  onlineSocket.addEventListener('close', () => {
    onlineId = null;
    onlinePeers = new Map();
    waitingForOnlineStart = false;
    updateOnlineStatus('Disconnected');
  });

  onlineSocket.addEventListener('error', () => {
    updateOnlineStatus('Connection error');
  });
}

function sendOnlineJoin() {
  if (!onlineSocket || onlineSocket.readyState !== WebSocket.OPEN) return;
  onlineSocket.send(JSON.stringify({
    type: 'join',
    name: playerName.value.trim() || 'Player',
    carTypeId: selectedCarTypeId,
  }));
}

function sendOnlineState(now) {
  if (selectedMatchType !== 'online' || !onlineSocket || onlineSocket.readyState !== WebSocket.OPEN) return;
  if (!cars[0] || now - lastOnlineSync < 50) return;
  lastOnlineSync = now;
  const car = cars[0];
  onlineSocket.send(JSON.stringify({
    type: 'state',
    name: car.name,
    carTypeId: car.type.id,
    mode: selectedMode,
    crashMapId: selectedCrashMap.id,
    bumpersMapId: selectedBumpersMap.id,
    battleActive,
    car: {
      x: car.x,
      y: car.y,
      angle: car.angle,
      vx: car.vx,
      vy: car.vy,
      health: car.health,
      eliminated: car.eliminated,
      boosts: car.boosts,
      powerName: car.powerName,
      powerColor: car.powerColor,
      powerTimer: car.powerTimer,
    },
  }));
}

function handleOnlineMessage(message) {
  if (message.type === 'welcome') {
    onlineId = message.id;
    updateOnlineStatus();
    maybeStartOnlineMatch();
    return;
  }

  if (message.type === 'peer-count') {
    updateOnlineStatus(`${message.count} connected`);
    return;
  }

  if (message.type === 'players') {
    onlinePeers = new Map(message.players.map((player) => [player.id, player]));
    updateOnlineStatus();
    maybeStartOnlineMatch();
    return;
  }

  if (message.type === 'join') {
    onlinePeers.set(message.id, {
      id: message.id,
      name: message.name,
      carTypeId: message.carTypeId,
    });
    updateOnlineStatus();
    maybeStartOnlineMatch();
    return;
  }

  if (message.type === 'leave') {
    onlinePeers.delete(message.id);
    cars = cars.filter((car) => car.id !== message.id);
    updateOnlineStatus();
    maybeStartOnlineMatch();
    return;
  }

  if (message.type === 'state') {
    onlinePeers.set(message.id, {
      id: message.id,
      name: message.name,
      carTypeId: message.carTypeId,
    });
    updateOnlineStatus();
    maybeStartOnlineMatch();
    syncRemoteCar(message);
  }
}

function maybeStartOnlineMatch() {
  if (!waitingForOnlineStart || selectedMatchType !== 'online') return;
  if (!onlineId || !hasEnoughOnlinePlayers()) {
    updateOnlineStatus();
    return;
  }
  waitingForOnlineStart = false;
  beginMatchCountdown();
  if (screens.game.classList.contains('hidden')) {
    startGame();
  }
}

function beginMatchCountdown() {
  if (matchCountdownActive || battleActive) return;
  matchCountdown = 3;
  matchCountdownActive = true;
  countdownStartedAt = performance.now();
  battleActive = false;
  updateOnlineStatus('Starting in 3');
}

function finishMatchCountdown() {
  matchCountdown = 0;
  matchCountdownActive = false;
  battleActive = true;
  battleStartedAt = performance.now();
  updateOnlineStatus('Match started');
}

function syncRemoteCar(message) {
  if (!message.car || message.id === onlineId) return;
  let car = cars.find((item) => item.id === message.id);
  if (!car) {
    car = createCar({
      id: message.id,
      name: message.name || 'Player',
      type: CAR_TYPES.find((type) => type.id === message.carTypeId) || CAR_TYPES[0],
      x: message.car.x,
      y: message.car.y,
      angle: message.car.angle,
      isRemote: true,
    });
    cars.push(car);
  }

  car.name = message.name || car.name;
  car.isRemote = true;
  car.x = message.car.x;
  car.y = message.car.y;
  car.angle = message.car.angle;
  car.vx = message.car.vx || 0;
  car.vy = message.car.vy || 0;
  car.health = message.car.health;
  car.eliminated = Boolean(message.car.eliminated);
  car.boosts = message.car.boosts;
  car.powerName = message.car.powerName || '';
  car.powerColor = message.car.powerColor || '';
  car.powerTimer = message.car.powerTimer || 0;
}

function updateOnlineStatus(text = '') {
  if (!onlineStatus) return;
  if (selectedMatchType !== 'online') {
    onlineStatus.textContent = 'Offline';
    if (startGameButton) startGameButton.textContent = 'Start arena battle';
    return;
  }
  if (text) {
    onlineStatus.textContent = text;
    return;
  }
  const connected = onlineSocket?.readyState === WebSocket.OPEN;
  const count = getOnlinePlayerCount();
  const required = getRequiredOnlinePlayers();
  const ready = count >= required;
  onlineStatus.textContent = connected
    ? `Online lobby: ${count}/${required} players${ready ? ' ready' : ` joined - ${required - count} more needed`}`
    : 'Online: not connected';
  if (startGameButton) {
    startGameButton.textContent = waitingForOnlineStart && !ready ? `Warm up ${count}/${required}` : 'Start arena battle';
  }
}

function startGame() {
  resizeCanvas();
  resetControls();
  selectedMode = modeButtons.find((button) => button.classList.contains('active'))?.dataset.mode || 'crash';
  selectedMatchType = matchButtons.find((button) => button.classList.contains('active'))?.dataset.matchType || 'bots';
  if (selectedMode === 'bumpers') pickBumpersMap();
  if (selectedMode === 'crash') pickCrashMap();
  if (selectedMatchType === 'online') {
    connectOnline();
    sendOnlineJoin();
  }
  buildArena();
  cars = [];
  particles = [];
  tireMarks = [];
  powerUps = [];
  waitingForOnlineStart = selectedMatchType === 'online' && !hasEnoughOnlinePlayers();
  matchCountdownActive = false;
  matchCountdown = 0;
  countdownStartedAt = 0;
  battleActive = false;
  if (!waitingForOnlineStart) {
    beginMatchCountdown();
  }

  const totalEnemies = getEnemyCount();
  const spawnPoints = getSpawnPoints();

  cars.push(createCar({
    id: selectedMatchType === 'online' && onlineId ? onlineId : 'player',
    name: playerName.value.trim() || 'You',
    isPlayer: true,
    type: CAR_TYPES.find((type) => type.id === selectedCarTypeId) || CAR_TYPES[0],
    ...spawnPoints[0],
  }));

  for (let i = 0; selectedMatchType === 'bots' && i < totalEnemies; i += 1) {
    const botType = CAR_TYPES[(i + 1) % CAR_TYPES.length];
    cars.push(createCar({
      id: `bot-${i}`,
      name: BOT_NAMES[i] || `Bot ${i + 1}`,
      type: botType,
      ...spawnPoints[i + 1],
    }));
  }

  if (selectedMatchType === 'online') {
    [...onlinePeers.values()]
      .filter((peer) => peer.id !== onlineId)
      .slice(0, spawnPoints.length - 1)
      .forEach((peer, index) => {
        cars.push(createCar({
          id: peer.id,
          name: peer.name || `Player ${index + 2}`,
          isRemote: true,
          type: CAR_TYPES.find((type) => type.id === peer.carTypeId) || CAR_TYPES[(index + 1) % CAR_TYPES.length],
          ...spawnPoints[index + 1],
        }));
      });
  }

  battleStartedAt = performance.now();
  lastFrame = performance.now();
  nextPowerUpAt = performance.now() + 1200;
  if (driverName) driverName.textContent = cars[0].name;
  showScreen('game');
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(gameLoop);
  updateOnlineStatus();
  maybeStartOnlineMatch();
}

function createCar(options) {
  const type = options.type || CAR_TYPES[0];
  return {
    id: options.id,
    name: options.name,
    isPlayer: Boolean(options.isPlayer),
    isRemote: Boolean(options.isRemote),
    x: options.x,
    y: options.y,
    angle: options.angle,
    vx: 0,
    vy: 0,
    health: type.health,
    maxHealth: type.health,
    color: type.color,
    type,
    radius: CAR_RADIUS * type.size,
    eliminated: false,
    kills: 0,
    damageDone: 0,
    hitCooldown: 0,
    lastHitBy: null,
    lastHitTimer: 0,
    boosts: getMaxBoosts(),
    boostRefillTimer: 0,
    boostFlash: 0,
    boostPressed: false,
    powerName: '',
    powerColor: '',
    powerTimer: 0,
    knockbackMultiplier: 1,
    aiSkill: 0.72 + Math.random() * 0.24,
    aiAggression: 0.48 + Math.random() * 0.44,
    aiPatience: 0.35 + Math.random() * 0.45,
    aiDecisionAt: 0,
    aiTargetId: null,
    aiOffset: Math.random() > 0.5 ? 1 : -1,
    aiStuckTime: 0,
    aiLastX: options.x,
    aiLastY: options.y,
  };
}

function gameLoop(now) {
  const dt = Math.min(0.033, (now - lastFrame) / 1000);
  lastFrame = now;

  if (matchCountdownActive) {
    matchCountdown = 3 - (now - countdownStartedAt) / 1000;
    if (matchCountdown <= 0) {
      finishMatchCountdown();
    }
  }

  const preMatch = isOnlinePreMatch();
  if (battleActive || (preMatch && !isFrozenCountdown())) {
    updateCars(dt, now);
    if (battleActive) {
      handleCarCollisions();
      checkBumpersEliminations();
    }
    updateParticles(dt);
  }
  sendOnlineState(now);
  drawGame();
  updateHud();

  const alive = getAliveCars();
  if (battleActive && alive.length <= 1) {
    showResults(alive[0] || getWinnerCandidate());
    return;
  }

  animationFrame = requestAnimationFrame(gameLoop);
}

function updateCars(dt, now) {
  cars.forEach((car) => {
    if (car.eliminated) return;
    if (car.isRemote) return;
    if (car.hitCooldown > 0) car.hitCooldown -= dt;
    if (car.lastHitTimer > 0) {
      car.lastHitTimer -= dt;
      if (car.lastHitTimer <= 0) car.lastHitBy = null;
    }
    updateBoostRefill(car, dt);
    updateCarPower(car, dt);
    if (car.boostFlash > 0) car.boostFlash -= dt;

    const input = car.isPlayer ? keys : getAiInput(car, now, dt);
    updateCarPhysics(car, input, dt);
    collideWithWalls(car);
    collideWithObstacles(car);
  });

  updatePowerUps(dt, now);
}

function updateCarPower(car, dt) {
  if (car.powerTimer <= 0) {
    car.powerTimer = 0;
    car.powerName = '';
    car.powerColor = '';
    car.knockbackMultiplier = 1;
    return;
  }

  car.powerTimer -= dt;
  if (car.powerTimer <= 0) {
    car.powerTimer = 0;
    car.powerName = '';
    car.powerColor = '';
    car.knockbackMultiplier = 1;
  }
}

function updatePowerUps(dt, now) {
  if (selectedMode !== 'bumpers') {
    powerUps = [];
    return;
  }

  powerUps.forEach((powerUp) => {
    powerUp.spin += dt * 2.6;
    powerUp.pulse += dt * 4.2;
  });

  if (battleActive && powerUps.length < POWERUP_LIMIT && now >= nextPowerUpAt) {
    spawnPowerUp();
    nextPowerUpAt = now + POWERUP_SPAWN_SECONDS * 1000;
  }

  cars.forEach((car) => {
    if (car.eliminated) return;
    powerUps = powerUps.filter((powerUp) => {
      if (Math.hypot(car.x - powerUp.x, car.y - powerUp.y) > car.radius + POWERUP_RADIUS) return true;
      applyPowerUp(car, powerUp);
      return false;
    });
  });
}

function spawnPowerUp() {
  const type = POWERUP_TYPES[Math.floor(Math.random() * POWERUP_TYPES.length)];
  const point = getSafePowerUpPoint();
  powerUps.push({
    type,
    x: point.x,
    y: point.y,
    spin: Math.random() * Math.PI * 2,
    pulse: Math.random() * Math.PI * 2,
  });
}

function getSafePowerUpPoint() {
  for (let attempt = 0; attempt < 18; attempt += 1) {
    const point = {
      x: 260 + Math.random() * (WORLD_WIDTH - 520),
      y: 260 + Math.random() * (WORLD_HEIGHT - 520),
    };
    const tooCloseToCar = cars.some((car) => !car.eliminated && Math.hypot(car.x - point.x, car.y - point.y) < 240);
    const tooCloseToPowerUp = powerUps.some((powerUp) => Math.hypot(powerUp.x - point.x, powerUp.y - point.y) < 220);
    if (!tooCloseToCar && !tooCloseToPowerUp) return point;
  }

  return { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 };
}

function applyPowerUp(car, powerUp) {
  const { type } = powerUp;
  car.powerName = type.name;
  car.powerColor = type.color;
  car.powerTimer = type.duration;
  car.knockbackMultiplier = type.knockback;

  if (type.id === 'pulse') {
    triggerShockwave(car, type.color);
  }

  if (type.id === 'charge') {
    car.boosts = getMaxBoosts();
    car.boostRefillTimer = 0;
  }

  burst(car.x, car.y, type.color, 28);
}

function triggerShockwave(car, color) {
  cars.forEach((other) => {
    if (other === car || other.eliminated) return;
    const dx = other.x - car.x;
    const dy = other.y - car.y;
    const distValue = Math.max(1, Math.hypot(dx, dy));
    if (distValue > 620) return;

    const force = (1 - distValue / 620) * 1350;
    other.vx += (dx / distValue) * force;
    other.vy += (dy / distValue) * force;
    markBumpersHit(car, other, force);
  });

  for (let i = 0; i < 54; i += 1) {
    const angle = (i / 54) * Math.PI * 2;
    particles.push({
      x: car.x + Math.cos(angle) * 54,
      y: car.y + Math.sin(angle) * 54,
      vx: Math.cos(angle) * 520,
      vy: Math.sin(angle) * 520,
      life: 0.42,
      color,
    });
  }
}

function updateBoostRefill(car, dt) {
  const maxBoosts = getMaxBoosts();
  car.boosts = Math.min(car.boosts, maxBoosts);

  if (car.boosts > 0) {
    car.boostRefillTimer = 0;
    return;
  }

  car.boostRefillTimer += dt;
  if (car.boostRefillTimer >= BOOST_REFILL_SECONDS) {
    car.boosts = maxBoosts;
    car.boostRefillTimer = 0;
  }
}

function getAiInput(car, now, dt) {
  updateAiMemory(car, now, dt);

  const opponents = cars.filter((other) => other !== car && !other.eliminated);
  const target =
    opponents.find((other) => other.id === car.aiTargetId) ||
    opponents.sort((a, b) => scoreTarget(car, b) - scoreTarget(car, a))[0];

  if (!target) return { left: false, right: false, gas: false, brake: true };

  const speed = Math.hypot(car.vx, car.vy);
  const targetSpeed = Math.hypot(target.vx, target.vy);
  const distValue = distance(car, target);
  const targetForward = forwardVector(target);
  const leadTime = clamp(distValue / 850, 0.12, 0.55) * car.aiSkill;
  const attackSide = car.aiOffset;
  const orbitDistance = distValue > 520 ? 0 : 130 + car.aiPatience * 120;
  const aimX =
    target.x +
    target.vx * leadTime -
    targetForward.y * attackSide * orbitDistance;
  const aimY =
    target.y +
    target.vy * leadTime +
    targetForward.x * attackSide * orbitDistance;
  const desired = Math.atan2(aimX - car.x, -(aimY - car.y));
  let diff = normalizeAngle(desired - car.angle);
  const close = distValue < 230;
  const tooFastForAngle = speed > 430 && Math.abs(diff) > 0.55;
  const wall = nearestWallPressure(car);
  const obstacle = nearestObstaclePressure(car);

  if (wall.active) {
    diff = normalizeAngle(wall.angle - car.angle);
  } else if (obstacle.active) {
    diff = normalizeAngle(obstacle.angle - car.angle);
  }

  const wobble = Math.sin(now / (520 - car.aiSkill * 160) + car.name.length * 2.1) * (0.12 + (1 - car.aiSkill) * 0.28);
  diff += wobble;

  const liningUpHit = Math.abs(diff) < 0.28 && distValue < 520;
  const panicReverse = car.aiStuckTime > 0.55 || (close && Math.abs(diff) > 1.85);
  const brakeForTurn = tooFastForAngle || panicReverse;
  const boost =
    liningUpHit &&
    speed > 170 &&
    speed < 680 &&
    targetSpeed < 680 &&
    car.boosts > 0 &&
    Math.random() < 0.025 + car.aiAggression * 0.035;

  return {
    left: diff < -0.1,
    right: diff > 0.1,
    gas: !panicReverse && Math.abs(diff) < 1.45,
    brake: brakeForTurn,
    boost,
  };
}

function updateAiMemory(car, now, dt) {
  const moved = Math.hypot(car.x - car.aiLastX, car.y - car.aiLastY);
  const speed = Math.hypot(car.vx, car.vy);
  car.aiStuckTime = moved < 3 && speed < 90 ? car.aiStuckTime + dt : Math.max(0, car.aiStuckTime - dt * 3);
  car.aiLastX = car.x;
  car.aiLastY = car.y;

  if (now < car.aiDecisionAt) return;

  const opponents = cars.filter((other) => other !== car && !other.eliminated);
  const target = opponents.sort((a, b) => scoreTarget(car, b) - scoreTarget(car, a))[0];
  car.aiTargetId = target?.id ?? null;
  car.aiOffset = Math.random() > 0.5 ? 1 : -1;
  car.aiDecisionAt = now + 650 + Math.random() * 900;
}

function scoreTarget(car, target) {
  const distValue = distance(car, target);
  const lowHealthBonus = 100 - target.health;
  const playerBonus = target.isPlayer ? 80 * car.aiAggression : 0;
  return lowHealthBonus * 1.4 + playerBonus - distValue * 0.08;
}

function nearestWallPressure(car) {
  const margin = selectedMode === 'bumpers' ? 520 : 270;
  const left = car.x;
  const right = WORLD_WIDTH - car.x;
  const top = car.y;
  const bottom = WORLD_HEIGHT - car.y;
  const nearest = Math.min(left, right, top, bottom);

  if (nearest > margin) return { active: false, angle: 0 };

  const centerAngle = Math.atan2(WORLD_WIDTH / 2 - car.x, -(WORLD_HEIGHT / 2 - car.y));
  return { active: true, angle: centerAngle };
}

function nearestObstaclePressure(car) {
  const obstacle = obstacles
    .map((item) => ({ item, dist: Math.hypot(item.x - car.x, item.y - car.y) - item.r }))
    .sort((a, b) => a.dist - b.dist)[0];

  if (!obstacle || obstacle.dist > 185) return { active: false, angle: 0 };

  const awayX = car.x - obstacle.item.x;
  const awayY = car.y - obstacle.item.y;
  return { active: true, angle: Math.atan2(awayX, -awayY) };
}

function updateCarPhysics(car, input, dt) {
  const speed = Math.hypot(car.vx, car.vy);
  const turnPower = (0.85 + Math.min(1, speed / 300) * 2.35) * (input.brake ? 1.1 : 1) * car.type.handling;

  if (input.left) car.angle -= turnPower * dt;
  if (input.right) car.angle += turnPower * dt;

  const forwardX = Math.sin(car.angle);
  const forwardY = -Math.cos(car.angle);
  const rightX = Math.cos(car.angle);
  const rightY = Math.sin(car.angle);

  if (!input.boost) {
    car.boostPressed = false;
  }

  if (input.boost && !car.boostPressed && car.boosts > 0) {
    car.boostPressed = true;
    car.vx += forwardX * 760 * car.type.boost;
    car.vy += forwardY * 760 * car.type.boost;
    car.boosts -= 1;
    if (car.boosts <= 0) {
      car.boostRefillTimer = 0;
    }
    car.boostFlash = 0.36;
    burst(car.x - forwardX * 36, car.y - forwardY * 36, '#00b5ff', 18);
  }

  if (input.gas) {
    car.vx += forwardX * 760 * car.type.speed * dt;
    car.vy += forwardY * 760 * car.type.speed * dt;
  }

  if (input.brake) {
    const reversePower = speed < 130 ? 520 : 330;
    car.vx -= forwardX * reversePower * dt;
    car.vy -= forwardY * reversePower * dt;
  }

  const forwardSpeed = car.vx * forwardX + car.vy * forwardY;
  const sideSpeed = car.vx * rightX + car.vy * rightY;
  const grip = input.brake ? 0.982 : 0.9;

  car.vx = forwardX * forwardSpeed + rightX * sideSpeed * grip;
  car.vy = forwardY * forwardSpeed + rightY * sideSpeed * grip;
  const drag = selectedMode === 'bumpers' ? 0.997 : 0.992;
  car.vx *= drag;
  car.vy *= drag;

  const maxSpeed = 850 * car.type.speed;
  const nextSpeed = Math.hypot(car.vx, car.vy);
  if (nextSpeed > maxSpeed) {
    car.vx = (car.vx / nextSpeed) * maxSpeed;
    car.vy = (car.vy / nextSpeed) * maxSpeed;
  }

  car.x += car.vx * dt;
  car.y += car.vy * dt;

  if (Math.abs(sideSpeed) > 90 && nextSpeed > 170) {
    addTireMark(car);
  }
}

function collideWithWalls(car) {
  if (selectedMode === 'bumpers') return;
  const margin = 95;
  if (car.x < margin) wallHit(car, margin, car.y, 1, 0);
  if (car.x > WORLD_WIDTH - margin) wallHit(car, WORLD_WIDTH - margin, car.y, -1, 0);
  if (car.y < margin) wallHit(car, car.x, margin, 0, 1);
  if (car.y > WORLD_HEIGHT - margin) wallHit(car, car.x, WORLD_HEIGHT - margin, 0, -1);
}

function wallHit(car, x, y, nx, ny) {
  const speed = Math.hypot(car.vx, car.vy);
  car.x = x;
  car.y = y;
  if (speed > 280 && car.hitCooldown <= 0) {
    burst(car.x, car.y, '#f7f7f2', 6);
    car.hitCooldown = 0.18;
  }

  const dot = car.vx * nx + car.vy * ny;
  car.vx -= 1.65 * dot * nx;
  car.vy -= 1.65 * dot * ny;
  car.vx *= 0.55;
  car.vy *= 0.55;
}

function checkBumpersEliminations() {
  if (selectedMode !== 'bumpers') return;

  cars.forEach((car) => {
    if (car.eliminated) return;
    const touchLeftSky = car.x - car.radius <= BUMPERS_PLATFORM_EDGE;
    const touchRightSky = car.x + car.radius >= WORLD_WIDTH - BUMPERS_PLATFORM_EDGE;
    const touchTopSky = car.y - car.radius <= BUMPERS_PLATFORM_EDGE;
    const touchBottomSky = car.y + car.radius >= WORLD_HEIGHT - BUMPERS_PLATFORM_EDGE;
    if (
      touchLeftSky ||
      touchRightSky ||
      touchTopSky ||
      touchBottomSky
    ) {
      car.eliminated = true;
      car.vx = 0;
      car.vy = 0;
      creditBumpersElimination(car);
      burst(clamp(car.x, BUMPERS_PLATFORM_EDGE, WORLD_WIDTH - BUMPERS_PLATFORM_EDGE), clamp(car.y, BUMPERS_PLATFORM_EDGE, WORLD_HEIGHT - BUMPERS_PLATFORM_EDGE), '#66ffa3', 24);
    }
  });
}

function collideWithObstacles(car) {
  if (selectedMode === 'bumpers') return;
  obstacles.forEach((obstacle) => {
    const dx = car.x - obstacle.x;
    const dy = car.y - obstacle.y;
      const minDist = car.radius + obstacle.r;
    const distValue = Math.hypot(dx, dy);
    if (distValue >= minDist || distValue === 0) return;

    const nx = dx / distValue;
    const ny = dy / distValue;
    const overlap = minDist - distValue;
    car.x += nx * overlap;
    car.y += ny * overlap;

    const speed = Math.hypot(car.vx, car.vy);
    if (!car.isPlayer && speed > 240 && car.hitCooldown <= 0) {
      damageCar(car, speed / 115, null);
      burst(car.x - nx * car.radius, car.y - ny * car.radius, '#ffcc33', 8);
      car.hitCooldown = 0.28;
    }

    const dot = car.vx * nx + car.vy * ny;
    car.vx -= 1.55 * dot * nx;
    car.vy -= 1.55 * dot * ny;
    car.vx *= 0.7;
    car.vy *= 0.7;
  });
}

function handleCarCollisions() {
  for (let i = 0; i < cars.length; i += 1) {
    for (let j = i + 1; j < cars.length; j += 1) {
      const a = cars[i];
      const b = cars[j];
      if (a.eliminated || b.eliminated) continue;

      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distValue = Math.hypot(dx, dy);
      const minDist = a.radius + b.radius;
      if (distValue >= minDist || distValue === 0) continue;

      const nx = dx / distValue;
      const ny = dy / distValue;
      const overlap = minDist - distValue;
      a.x -= nx * overlap * 0.5;
      a.y -= ny * overlap * 0.5;
      b.x += nx * overlap * 0.5;
      b.y += ny * overlap * 0.5;

      const relVx = b.vx - a.vx;
      const relVy = b.vy - a.vy;
      const impactSpeed = Math.abs(relVx * nx + relVy * ny);
      if (selectedMode === 'bumpers') {
        applyBumpersImpact(a, b, nx, ny, impactSpeed);
        continue;
      }
      const damage = Math.max(0, (impactSpeed - 120) / 28);

      if (damage > 0.8) {
        const aForward = forwardVector(a);
        const bForward = forwardVector(b);
        const aAttack = aForward.x * nx + aForward.y * ny;
        const bAttack = -(bForward.x * nx + bForward.y * ny);
        const aSpeed = Math.hypot(a.vx, a.vy);
        const bSpeed = Math.hypot(b.vx, b.vy);
        const aMovingForward = a.vx * aForward.x + a.vy * aForward.y;
        const bMovingForward = b.vx * bForward.x + b.vy * bForward.y;
        const aHitPower = Math.max(0, aAttack) * Math.max(0, aMovingForward);
        const bHitPower = Math.max(0, bAttack) * Math.max(0, bMovingForward);

        if (aHitPower > bHitPower * 1.2 && aHitPower > 140) {
          damageCar(b, damage * (1.25 + Math.max(0, aAttack)), a);
          if (!a.isPlayer && bHitPower > 110) {
            damageCar(a, damage * 0.25, b);
          }
        } else if (bHitPower > aHitPower * 1.2 && bHitPower > 140) {
          damageCar(a, damage * (1.25 + Math.max(0, bAttack)), b);
          if (!b.isPlayer && aHitPower > 110) {
            damageCar(b, damage * 0.25, a);
          }
        } else {
          const sharedDamage = damage * 0.35;
          if (!a.isPlayer) damageCar(a, sharedDamage, b);
          if (!b.isPlayer) damageCar(b, sharedDamage, a);
        }
        burst((a.x + b.x) / 2, (a.y + b.y) / 2, '#ff2f54', 12);
      }

      const impulse = impactSpeed * 0.45;
      a.vx -= nx * impulse;
      a.vy -= ny * impulse;
      b.vx += nx * impulse;
      b.vy += ny * impulse;
    }
  }
}

function applyBumpersImpact(a, b, nx, ny, impactSpeed) {
  const aSpeed = Math.hypot(a.vx, a.vy);
  const bSpeed = Math.hypot(b.vx, b.vy);
  const aForward = forwardVector(a);
  const bForward = forwardVector(b);
  const aAttack = Math.max(0, aForward.x * nx + aForward.y * ny);
  const bAttack = Math.max(0, -(bForward.x * nx + bForward.y * ny));
  const base = Math.max(360, impactSpeed * 1.85);
  const aMass = a.type.size;
  const bMass = b.type.size;
  const aPower = (base + aSpeed * (0.55 + aAttack * 1.15)) * a.knockbackMultiplier;
  const bPower = (base + bSpeed * (0.55 + bAttack * 1.15)) * b.knockbackMultiplier;
  const aMegaHit = a.powerName === 'Mega Hit';
  const bMegaHit = b.powerName === 'Mega Hit';
  const aLaunch = aMegaHit ? 1.55 : 1;
  const bLaunch = bMegaHit ? 1.55 : 1;

  a.vx -= nx * (bPower / aMass) * 0.42 * bLaunch;
  a.vy -= ny * (bPower / aMass) * 0.42 * bLaunch;
  b.vx += nx * (aPower / bMass) * 0.42 * aLaunch;
  b.vy += ny * (aPower / bMass) * 0.42 * aLaunch;
  markBumpersHit(a, b, aPower);
  markBumpersHit(b, a, bPower);

  a.vx *= 0.96;
  a.vy *= 0.96;
  b.vx *= 0.96;
  b.vy *= 0.96;
  burst((a.x + b.x) / 2, (a.y + b.y) / 2, '#66ffa3', 18);
  if (a.knockbackMultiplier > 1.2 || b.knockbackMultiplier > 1.2) {
    burst((a.x + b.x) / 2, (a.y + b.y) / 2, '#ffcc33', aMegaHit || bMegaHit ? 34 : 16);
  }
}

function markBumpersHit(attacker, victim, power) {
  if (!attacker || !victim || attacker === victim || power < 180) return;
  victim.lastHitBy = attacker.id;
  victim.lastHitTimer = BUMPERS_ELIMINATION_CREDIT_SECONDS;
}

function creditBumpersElimination(victim) {
  if (!victim.lastHitBy || victim.lastHitTimer <= 0) return;
  const attacker = cars.find((car) => car.id === victim.lastHitBy);
  if (!attacker || attacker === victim) return;
  attacker.kills += 1;
  attacker.damageDone += 100;
}

function damageCar(car, amount, attacker) {
  if (selectedMode === 'bumpers') return;
  if (car.eliminated) return;
  car.health = Math.max(0, car.health - amount);
  if (attacker && attacker !== car) attacker.damageDone += amount;
  if (car.health <= 0) {
    car.eliminated = true;
    car.vx = 0;
    car.vy = 0;
    if (attacker && attacker !== car) attacker.kills += 1;
    burst(car.x, car.y, '#ffcc33', 28);
  }
}

function drawGame() {
  const camera = getCamera();
  ctx.setTransform(renderScaleX, 0, 0, renderScaleY, 0, 0);
  ctx.clearRect(0, 0, viewWidth, viewHeight);
  ctx.fillStyle = '#07080b';
  ctx.fillRect(0, 0, viewWidth, viewHeight);
  ctx.save();
  ctx.translate(camera.offsetX, camera.offsetY);
  ctx.scale(camera.scale, camera.scale);
  ctx.translate(-camera.x, -camera.y);
  drawArena();
  drawTireMarks();
  drawObstacles();
  drawPowerUps();
  cars.filter((car) => !car.eliminated).forEach(drawCar);
  drawParticles();
  ctx.restore();
}

function getCamera() {
  const squareView = Math.min(viewWidth, viewHeight);
  const scale = (squareView / WORLD_WIDTH) * 0.96;
  const visibleWidth = viewWidth / scale;
  const visibleHeight = viewHeight / scale;

  return {
    x: (WORLD_WIDTH - visibleWidth) / 2,
    y: (WORLD_HEIGHT - visibleHeight) / 2,
    offsetX: (viewWidth - WORLD_WIDTH * scale) / 2,
    offsetY: (viewHeight - WORLD_HEIGHT * scale) / 2,
    scale,
  };
}

function drawArena() {
  if (selectedMode === 'bumpers') {
    drawSkyArena();
    return;
  }

  const map = selectedCrashMap || CRASH_MAPS[0];
  const gradient = ctx.createRadialGradient(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 200, WORLD_WIDTH / 2, WORLD_HEIGHT / 2, WORLD_WIDTH);
  gradient.addColorStop(0, map.floor[0]);
  gradient.addColorStop(1, map.floor[1]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

  ctx.strokeStyle = map.border;
  ctx.lineWidth = 12;
  roundRect(70, 70, WORLD_WIDTH - 140, WORLD_HEIGHT - 140, 90);
  ctx.stroke();

  ctx.strokeStyle = map.accent;
  ctx.lineWidth = 22;
  ctx.beginPath();
  ctx.ellipse(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 720, 520, 0, 0, Math.PI * 2);
  ctx.stroke();

  if (map.id === 'neon-docks') {
    ctx.strokeStyle = 'rgba(102,255,163,0.16)';
    ctx.lineWidth = 16;
    for (let x = 360; x < WORLD_WIDTH; x += 420) {
      ctx.beginPath();
      ctx.moveTo(x, 140);
      ctx.lineTo(x, WORLD_HEIGHT - 140);
      ctx.stroke();
    }
  }

  if (map.id === 'scrap-ring') {
    ctx.strokeStyle = 'rgba(255,141,66,0.14)';
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.ellipse(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 900, 780, 0.18, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 440, 330, -0.12, 0, Math.PI * 2);
    ctx.stroke();
  }

  if (map.id === 'ice-vault') {
    ctx.strokeStyle = 'rgba(210,240,255,0.18)';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(WORLD_WIDTH / 2, 120);
    ctx.lineTo(WORLD_WIDTH / 2, WORLD_HEIGHT - 120);
    ctx.moveTo(120, WORLD_HEIGHT / 2);
    ctx.lineTo(WORLD_WIDTH - 120, WORLD_HEIGHT / 2);
    ctx.stroke();
  }

  ctx.fillStyle = map.grid;
  for (let y = 170; y < WORLD_HEIGHT; y += 220) {
    ctx.fillRect(120, y, WORLD_WIDTH - 240, 4);
  }
}

function drawSkyArena() {
  const map = selectedBumpersMap || BUMPERS_MAPS[0];
  const sky = ctx.createLinearGradient(0, 0, 0, WORLD_HEIGHT);
  sky.addColorStop(0, map.sky[0]);
  sky.addColorStop(0.44, map.sky[1]);
  sky.addColorStop(0.72, map.sky[2]);
  sky.addColorStop(1, map.sky[3]);
  ctx.fillStyle = sky;
  ctx.fillRect(-600, -600, WORLD_WIDTH + 1200, WORLD_HEIGHT + 1200);

  const haze = ctx.createRadialGradient(WORLD_WIDTH / 2, WORLD_HEIGHT * 0.58, 120, WORLD_WIDTH / 2, WORLD_HEIGHT * 0.58, WORLD_WIDTH * 0.85);
  haze.addColorStop(0, map.haze);
  haze.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = haze;
  ctx.fillRect(-600, -600, WORLD_WIDTH + 1200, WORLD_HEIGHT + 1200);

  if (map.id === 'sunset-spire') {
    const sun = ctx.createRadialGradient(1860, 360, 20, 1860, 360, 280);
    sun.addColorStop(0, 'rgba(255,245,190,0.9)');
    sun.addColorStop(1, 'rgba(255,160,90,0)');
    ctx.fillStyle = sun;
    ctx.fillRect(1440, -60, 620, 620);
  }

  if (map.id === 'storm-rig') {
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = '#dcefff';
    ctx.lineWidth = 4;
    for (let x = -400; x < WORLD_WIDTH + 500; x += 180) {
      ctx.beginPath();
      ctx.moveTo(x, -100);
      ctx.lineTo(x - 240, WORLD_HEIGHT + 260);
      ctx.stroke();
    }
    ctx.restore();
  }

  if (map.id === 'aurora-pad') {
    ctx.save();
    ctx.globalAlpha = 0.24;
    ctx.strokeStyle = '#66ffa3';
    ctx.lineWidth = 42;
    for (let x = -100; x < WORLD_WIDTH + 200; x += 420) {
      ctx.beginPath();
      ctx.moveTo(x, -200);
      ctx.bezierCurveTo(x + 220, 360, x - 140, 820, x + 180, 1320);
      ctx.stroke();
    }
    ctx.strokeStyle = '#b56cff';
    for (let x = 160; x < WORLD_WIDTH + 260; x += 520) {
      ctx.beginPath();
      ctx.moveTo(x, -180);
      ctx.bezierCurveTo(x - 130, 420, x + 260, 930, x + 30, 1500);
      ctx.stroke();
    }
    ctx.restore();
  }

  const cloudAlpha = map.id === 'storm-rig' ? 0.38 : map.id === 'aurora-pad' ? 0.3 : 0.68;
  drawCloud(290, 310, 1.25, cloudAlpha);
  drawCloud(1760, 390, 1.45, cloudAlpha * 0.95);
  drawCloud(540, 1880, 1.05, cloudAlpha * 0.82);
  drawCloud(1900, 1840, 1.16, cloudAlpha * 0.86);
  drawCloud(1120, 2140, 1.6, cloudAlpha * 0.62);

  ctx.save();
  ctx.globalAlpha = 0.22;
  for (let y = 520; y < WORLD_HEIGHT + 360; y += 310) {
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath();
    ctx.ellipse(WORLD_WIDTH / 2, y, 1040, 82, -0.06, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 70;
  ctx.shadowOffsetY = 92;
  ctx.fillStyle = '#151a20';
  roundRect(88, 126, WORLD_WIDTH - 176, WORLD_HEIGHT - 176, 52);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.32)';
  ctx.shadowBlur = 38;
  ctx.shadowOffsetY = 34;
  const platform = ctx.createLinearGradient(0, 70, 0, WORLD_HEIGHT - 70);
  platform.addColorStop(0, map.platform[0]);
  platform.addColorStop(0.32, map.platform[1]);
  platform.addColorStop(1, map.platform[2]);
  ctx.fillStyle = platform;
  roundRect(70, 70, WORLD_WIDTH - 140, WORLD_HEIGHT - 140, 46);
  ctx.fill();
  ctx.restore();

  ctx.save();
  roundRect(70, 70, WORLD_WIDTH - 140, WORLD_HEIGHT - 140, 46);
  ctx.clip();
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = '#f4f6f7';
  ctx.lineWidth = 2;
  for (let x = 150; x < WORLD_WIDTH - 120; x += 170) {
    ctx.beginPath();
    ctx.moveTo(x, 110);
    ctx.lineTo(x - 80, WORLD_HEIGHT - 110);
    ctx.stroke();
  }
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = '#080a0d';
  for (let i = 0; i < 115; i += 1) {
    const x = 120 + ((i * 457) % (WORLD_WIDTH - 240));
    const y = 120 + ((i * 281) % (WORLD_HEIGHT - 240));
    ctx.fillRect(x, y, 5 + (i % 9), 2);
  }
  ctx.restore();

  ctx.strokeStyle = 'rgba(255,255,255,0.36)';
  ctx.lineWidth = 10;
  roundRect(70, 70, WORLD_WIDTH - 140, WORLD_HEIGHT - 140, 46);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(4,7,10,0.58)';
  ctx.lineWidth = 28;
  roundRect(99, 99, WORLD_WIDTH - 198, WORLD_HEIGHT - 198, 34);
  ctx.stroke();

  ctx.save();
  ctx.strokeStyle = map.stripe;
  ctx.lineWidth = 14;
  ctx.globalAlpha = 0.82;
  ctx.setLineDash([54, 34]);
  roundRect(136, 136, WORLD_WIDTH - 272, WORLD_HEIGHT - 272, 30);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = 'rgba(10,12,16,0.55)';
  ctx.lineWidth = 5;
  ctx.setLineDash([54, 34]);
  roundRect(136, 136, WORLD_WIDTH - 272, WORLD_HEIGHT - 272, 30);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 5;
  for (let x = 420; x < WORLD_WIDTH; x += 390) {
    ctx.beginPath();
    ctx.moveTo(x, 150);
    ctx.lineTo(x, WORLD_HEIGHT - 150);
    ctx.stroke();
  }
  for (let y = 420; y < WORLD_HEIGHT; y += 390) {
    ctx.beginPath();
    ctx.moveTo(150, y);
    ctx.lineTo(WORLD_WIDTH - 150, y);
    ctx.stroke();
  }

  ctx.strokeStyle = map.accent;
  ctx.globalAlpha = 0.36;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.ellipse(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 340, 340, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawCloud(x, y, scale, alpha = 0.62) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = `rgba(255,255,255,${alpha})`;
  ctx.beginPath();
  ctx.arc(-42, 8, 42, 0, Math.PI * 2);
  ctx.arc(0, -16, 58, 0, Math.PI * 2);
  ctx.arc(55, 10, 44, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function buildArena() {
  if (selectedMode === 'bumpers') {
    obstacles = [];
    return;
  }

  const map = selectedCrashMap || CRASH_MAPS[0];
  obstacles = sanitizeCrashObstacles(getCrashObstacles(map.layout));
}

function getCrashObstacles(layout) {
  const point = (x, y, r) => ({ x: WORLD_WIDTH * x, y: WORLD_HEIGHT * y, r });
  const layouts = {
    classic: [
      point(0.5, 0.5, 82),
      point(0.28, 0.35, 58),
      point(0.72, 0.35, 58),
      point(0.28, 0.68, 58),
      point(0.72, 0.68, 58),
    ],
    lanes: [
      point(0.5, 0.5, 78),
      point(0.35, 0.28, 52),
      point(0.65, 0.28, 52),
      point(0.35, 0.72, 52),
      point(0.65, 0.72, 52),
      point(0.5, 0.2, 40),
      point(0.5, 0.8, 40),
    ],
    ring: [
      point(0.5, 0.5, 104),
      point(0.29, 0.5, 54),
      point(0.71, 0.5, 54),
      point(0.5, 0.29, 54),
      point(0.5, 0.71, 54),
      point(0.36, 0.36, 42),
      point(0.64, 0.64, 42),
    ],
    cross: [
      point(0.5, 0.5, 70),
      point(0.5, 0.34, 52),
      point(0.5, 0.66, 52),
      point(0.34, 0.5, 52),
      point(0.66, 0.5, 52),
      point(0.25, 0.25, 40),
      point(0.75, 0.75, 40),
    ],
    pillars: [
      point(0.38, 0.32, 62),
      point(0.62, 0.32, 62),
      point(0.38, 0.68, 62),
      point(0.62, 0.68, 62),
      point(0.5, 0.5, 48),
      point(0.24, 0.5, 38),
      point(0.76, 0.5, 38),
    ],
    diagonal: [
      point(0.36, 0.32, 46),
      point(0.46, 0.42, 56),
      point(0.54, 0.58, 56),
      point(0.64, 0.68, 46),
      point(0.66, 0.34, 44),
      point(0.34, 0.66, 44),
    ],
    clusters: [
      point(0.32, 0.35, 42),
      point(0.38, 0.39, 38),
      point(0.68, 0.35, 42),
      point(0.62, 0.39, 38),
      point(0.32, 0.66, 42),
      point(0.38, 0.61, 38),
      point(0.68, 0.66, 42),
      point(0.62, 0.61, 38),
    ],
    diamonds: [
      point(0.5, 0.27, 52),
      point(0.73, 0.5, 52),
      point(0.5, 0.73, 52),
      point(0.27, 0.5, 52),
      point(0.5, 0.5, 66),
      point(0.37, 0.37, 36),
      point(0.63, 0.63, 36),
    ],
    open: [
      point(0.42, 0.38, 76),
      point(0.58, 0.62, 76),
      point(0.7, 0.34, 48),
      point(0.3, 0.66, 48),
    ],
    maze: [
      point(0.4, 0.28, 44),
      point(0.6, 0.28, 44),
      point(0.32, 0.43, 52),
      point(0.68, 0.43, 52),
      point(0.4, 0.58, 44),
      point(0.6, 0.58, 44),
      point(0.5, 0.72, 52),
      point(0.5, 0.5, 38),
    ],
  };

  return layouts[layout] || layouts.classic;
}

function sanitizeCrashObstacles(nextObstacles) {
  const spawnPoints = getSpawnPoints();
  return nextObstacles
    .map((obstacle) => ({
      ...obstacle,
      x: clamp(obstacle.x, 230, WORLD_WIDTH - 230),
      y: clamp(obstacle.y, 230, WORLD_HEIGHT - 230),
      r: clamp(obstacle.r, 34, 112),
    }))
    .filter((obstacle) => {
      const clearOfSpawns = spawnPoints.every((spawn) => Math.hypot(spawn.x - obstacle.x, spawn.y - obstacle.y) > obstacle.r + 190);
      const clearOfWalls =
        obstacle.x - obstacle.r > 140 &&
        obstacle.x + obstacle.r < WORLD_WIDTH - 140 &&
        obstacle.y - obstacle.r > 140 &&
        obstacle.y + obstacle.r < WORLD_HEIGHT - 140;
      return clearOfSpawns && clearOfWalls;
    });
}

function drawObstacles() {
  const map = selectedMode === 'crash' ? selectedCrashMap || CRASH_MAPS[0] : null;
  obstacles.forEach((obstacle) => {
    ctx.save();
    ctx.translate(obstacle.x, obstacle.y);
    const gradient = ctx.createRadialGradient(-20, -25, 10, 0, 0, obstacle.r);
    gradient.addColorStop(0, map?.obstacleColor || '#5d6570');
    gradient.addColorStop(1, '#1d2128');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, obstacle.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();
  });
}

function drawPowerUps() {
  if (selectedMode !== 'bumpers') return;

  powerUps.forEach((powerUp) => {
    const glow = 10 + Math.sin(powerUp.pulse) * 5;
    ctx.save();
    ctx.translate(powerUp.x, powerUp.y);
    ctx.rotate(powerUp.spin);
    ctx.shadowColor = powerUp.type.color;
    ctx.shadowBlur = 30 + glow;
    ctx.fillStyle = powerUp.type.color;
    ctx.beginPath();
    ctx.arc(0, 0, POWERUP_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255,255,255,0.78)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (let i = 0; i < 6; i += 1) {
      const angle = (i / 6) * Math.PI * 2;
      const radius = i % 2 === 0 ? 23 : 11;
      const x = Math.cos(angle - Math.PI / 2) * radius;
      const y = Math.sin(angle - Math.PI / 2) * radius;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  });
}

function drawCar(car) {
  ctx.save();
  ctx.translate(car.x, car.y);
  ctx.rotate(car.angle);
  ctx.scale(1.16 * car.type.size, 1.16 * car.type.size);
  ctx.globalAlpha = car.eliminated ? 0.38 : 1;

  if (car.powerTimer > 0) {
    ctx.save();
    ctx.globalAlpha = 0.62;
    ctx.strokeStyle = car.powerColor || '#ffcc33';
    ctx.lineWidth = 8;
    ctx.shadowColor = car.powerColor || '#ffcc33';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.arc(0, 0, 74, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (car.boostFlash > 0) {
    ctx.save();
    ctx.globalAlpha = Math.min(0.75, car.boostFlash * 2.2);
    ctx.fillStyle = '#00b5ff';
    ctx.beginPath();
    ctx.moveTo(-18, 62);
    ctx.lineTo(0, 112);
    ctx.lineTo(18, 62);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  ctx.shadowColor = 'rgba(0,0,0,0.68)';
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 16;
  ctx.fillStyle = 'rgba(0,0,0,0.42)';
  roundRect(-40, -64, 80, 138, 30);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  const steer = car.isPlayer ? (keys.left ? -0.18 : keys.right ? 0.18 : 0) : 0;
  drawWheel(-43, -39, steer);
  drawWheel(29, -39, steer);
  drawWheel(-43, 30, 0);
  drawWheel(29, 30, 0);

  const body = createCarBodyPath(car.type.shape);

  const bodyGradient = ctx.createLinearGradient(-34, -65, 34, 74);
  bodyGradient.addColorStop(0, lighten(car.color, 0.48));
  bodyGradient.addColorStop(0.32, car.color);
  bodyGradient.addColorStop(0.72, darken(car.color, 0.22));
  bodyGradient.addColorStop(1, darken(car.color, 0.5));
  ctx.fillStyle = bodyGradient;
  ctx.fill(body);

  ctx.save();
  ctx.clip(body);
  const depth = ctx.createLinearGradient(-46, -78, 48, 82);
  depth.addColorStop(0, 'rgba(255,255,255,0.38)');
  depth.addColorStop(0.22, 'rgba(255,255,255,0.08)');
  depth.addColorStop(0.58, 'rgba(0,0,0,0.02)');
  depth.addColorStop(1, 'rgba(0,0,0,0.42)');
  ctx.fillStyle = depth;
  ctx.fillRect(-48, -82, 96, 168);

  ctx.fillStyle = 'rgba(255,255,255,0.18)';
  ctx.beginPath();
  ctx.ellipse(-12, -24, 9, 48, 0.14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.beginPath();
  ctx.ellipse(25, 12, 8, 54, -0.08, 0, Math.PI * 2);
  ctx.fill();

  const hood = ctx.createLinearGradient(0, -74, 0, -16);
  hood.addColorStop(0, 'rgba(255,255,255,0.28)');
  hood.addColorStop(1, 'rgba(0,0,0,0.1)');
  ctx.fillStyle = hood;
  roundRect(-24, -66, 48, 46, 12);
  ctx.fill();

  const roof = ctx.createLinearGradient(-22, -18, 22, 42);
  roof.addColorStop(0, 'rgba(255,255,255,0.2)');
  roof.addColorStop(0.45, 'rgba(0,0,0,0.02)');
  roof.addColorStop(1, 'rgba(0,0,0,0.28)');
  ctx.fillStyle = roof;
  roundRect(-26, -18, 52, 64, 16);
  ctx.fill();

  ctx.strokeStyle = 'rgba(0,0,0,0.25)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-31, -35);
  ctx.lineTo(-25, 55);
  ctx.moveTo(31, -35);
  ctx.lineTo(25, 55);
  ctx.stroke();
  ctx.restore();

  ctx.strokeStyle = car.isPlayer ? '#ffffff' : 'rgba(255,255,255,0.28)';
  ctx.lineWidth = car.isPlayer ? 2.6 : 1.5;
  ctx.stroke(body);

  ctx.save();
  ctx.clip(body);
  ctx.strokeStyle = 'rgba(255,255,255,0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-24, -50);
  ctx.bezierCurveTo(-15, -20, -17, 30, -23, 58);
  ctx.moveTo(24, -50);
  ctx.bezierCurveTo(15, -20, 17, 30, 23, 58);
  ctx.stroke();
  ctx.restore();

  drawCarDetails(car.type.shape, car.color);

  ctx.restore();

  drawHealthBar(car);
}

function drawHealthBar(car) {
  if (car.eliminated) return;
  ctx.save();
  ctx.translate(car.x, car.y - 88 * car.type.size);
  ctx.scale(1.18, 1.18);
  ctx.fillStyle = 'rgba(0,0,0,0.72)';
  roundRect(-38, -8, 76, 12, 6);
  ctx.fill();
  ctx.fillStyle = car.health > 45 ? '#66ffa3' : car.health > 20 ? '#ffcc33' : '#ff2f54';
  roundRect(-36, -6, 72 * (car.health / car.maxHealth), 8, 4);
  ctx.fill();
  ctx.fillStyle = '#f7f7f2';
  ctx.font = '700 18px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(car.name, 0, -15);
  ctx.restore();
}

function drawWheel(x, y, steer) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(steer);
  ctx.shadowColor = 'rgba(0,0,0,0.55)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;
  ctx.fillStyle = '#020202';
  roundRect(0, 0, 16, 38, 6);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  const tire = ctx.createLinearGradient(0, 0, 16, 38);
  tire.addColorStop(0, '#2a2e35');
  tire.addColorStop(0.5, '#050506');
  tire.addColorStop(1, '#171a1f');
  ctx.fillStyle = tire;
  roundRect(2, 3, 12, 32, 4);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.18)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let y = 8; y <= 30; y += 7) {
    ctx.moveTo(3, y);
    ctx.lineTo(13, y + 2);
  }
  ctx.stroke();

  ctx.fillStyle = 'rgba(180,190,200,0.28)';
  roundRect(6, 13, 4, 12, 2);
  ctx.fill();
  ctx.restore();
}

function createCarBodyPath(shape) {
  const body = new Path2D();

  if (shape === 'truck' || shape === 'armored') {
    const w = shape === 'armored' ? 42 : 39;
    body.moveTo(-w, -58);
    body.lineTo(w, -58);
    body.lineTo(w, 62);
    body.quadraticCurveTo(w, 74, w - 12, 76);
    body.lineTo(-w + 12, 76);
    body.quadraticCurveTo(-w, 74, -w, 62);
    body.closePath();
    return body;
  }

  if (shape === 'wedge' || shape === 'blade') {
    body.moveTo(0, -76);
    body.bezierCurveTo(24, -55, 34, -25, 35, 52);
    body.bezierCurveTo(20, 68, -20, 68, -35, 52);
    body.bezierCurveTo(-34, -25, -24, -55, 0, -76);
    body.closePath();
    return body;
  }

  if (shape === 'compact') {
    body.moveTo(0, -58);
    body.bezierCurveTo(24, -56, 31, -39, 31, -16);
    body.lineTo(31, 42);
    body.bezierCurveTo(22, 61, -22, 61, -31, 42);
    body.lineTo(-31, -16);
    body.bezierCurveTo(-31, -39, -24, -56, 0, -58);
    body.closePath();
    return body;
  }

  if (shape === 'muscle') {
    body.moveTo(0, -66);
    body.bezierCurveTo(31, -64, 38, -45, 39, -20);
    body.lineTo(35, 55);
    body.bezierCurveTo(23, 74, -23, 74, -35, 55);
    body.lineTo(-39, -20);
    body.bezierCurveTo(-38, -45, -31, -64, 0, -66);
    body.closePath();
    return body;
  }

  if (shape === 'racer' || shape === 'hyper') {
    body.moveTo(0, -78);
    body.bezierCurveTo(20, -68, 28, -48, 32, -28);
    body.bezierCurveTo(42, 7, 33, 49, 18, 73);
    body.lineTo(-18, 73);
    body.bezierCurveTo(-33, 49, -42, 7, -32, -28);
    body.bezierCurveTo(-28, -48, -20, -68, 0, -78);
    body.closePath();
    return body;
  }

  body.moveTo(0, -67);
  body.bezierCurveTo(23, -65, 31, -52, 34, -31);
  body.bezierCurveTo(40, -15, 39, 27, 31, 50);
  body.bezierCurveTo(25, 66, 15, 72, 0, 74);
  body.bezierCurveTo(-15, 72, -25, 66, -31, 50);
  body.bezierCurveTo(-39, 27, -40, -15, -34, -31);
  body.bezierCurveTo(-31, -52, -23, -65, 0, -67);
  body.closePath();
  return body;
}

function drawCarDetails(shape, color) {
  drawBumperSet(shape, color);

  if (shape === 'truck' || shape === 'armored') {
    drawGlassPanel(-25, -39, 25, -13);
    drawGlassPanel(-27, -1, 27, 30);
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    roundRect(-35, 39, 70, 21, 7);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.16)';
    ctx.fillRect(-31, 43, 62, 5);
    if (shape === 'armored') {
      ctx.strokeStyle = 'rgba(255,255,255,0.28)';
      ctx.lineWidth = 3;
      roundRect(-31, -51, 62, 114, 10);
      ctx.stroke();
      drawRivetLine(-33, -43, 9);
      drawRivetLine(27, -43, 9);
    }
  } else if (shape === 'compact') {
    drawGlassPanel(-18, -34, 18, -12);
    drawGlassPanel(-20, -2, 20, 31);
    drawGlassPanel(-17, 38, 17, 51);
  } else if (shape === 'wedge' || shape === 'blade') {
    drawGlassPanel(-17, -42, 17, -14);
    drawGlassPanel(-20, -5, 20, 27);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    roundRect(-5, -68, 10, 123, 4);
    ctx.fill();
    if (shape === 'blade') {
      ctx.strokeStyle = 'rgba(0,0,0,0.28)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-27, 42);
      ctx.lineTo(27, 42);
      ctx.stroke();
    }
  } else if (shape === 'racer' || shape === 'hyper') {
    drawGlassPanel(-15, -47, 15, -20);
    drawGlassPanel(-18, -10, 18, 26);
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    roundRect(-32, 50, 64, 8, 4);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    ctx.fillRect(-27, -60, 54, 5);
    if (shape === 'hyper') {
      ctx.strokeStyle = lighten(color, 0.5);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-20, -66);
      ctx.lineTo(0, -73);
      ctx.lineTo(20, -66);
      ctx.stroke();
    }
  } else {
    drawGlassPanel(-21, -32, 21, -9);
    drawGlassPanel(-19, -2, 19, 31);
    drawGlassPanel(-18, 36, 18, 52);
  }

  drawLights();
}

function drawGlassPanel(left, top, right, bottom) {
  const width = right - left;
  const height = bottom - top;
  const glass = ctx.createLinearGradient(left, top, right, bottom);
  glass.addColorStop(0, 'rgba(210,240,255,0.68)');
  glass.addColorStop(0.45, 'rgba(42,72,94,0.86)');
  glass.addColorStop(1, 'rgba(8,12,18,0.92)');
  ctx.fillStyle = glass;
  roundRect(left, top, width, height, 8);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.22)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.beginPath();
  ctx.moveTo(left + 6, top + 5);
  ctx.lineTo(right - 7, top + 5);
  ctx.lineTo(right - 15, top + 10);
  ctx.lineTo(left + 11, top + 11);
  ctx.closePath();
  ctx.fill();
}

function drawBumperSet(shape, color) {
  const bumperColor = shape === 'armored' || shape === 'truck' ? '#15181d' : darken(color, 0.45);
  ctx.fillStyle = bumperColor;
  roundRect(-25, -72, 50, 9, 4);
  ctx.fill();
  roundRect(-28, 63, 56, 10, 4);
  ctx.fill();

  ctx.fillStyle = 'rgba(255,255,255,0.16)';
  roundRect(-18, -70, 36, 3, 2);
  ctx.fill();
}

function drawLights() {
  const headlight = ctx.createLinearGradient(0, -66, 0, -56);
  headlight.addColorStop(0, '#ffffff');
  headlight.addColorStop(1, '#ffe79a');
  ctx.fillStyle = headlight;
  roundRect(-25, -64, 16, 7, 3);
  ctx.fill();
  roundRect(9, -64, 16, 7, 3);
  ctx.fill();

  ctx.fillStyle = '#d51525';
  roundRect(-25, 62, 17, 7, 3);
  ctx.fill();
  roundRect(8, 62, 17, 7, 3);
  ctx.fill();

  ctx.fillStyle = 'rgba(255,255,255,0.16)';
  roundRect(-4, -58, 8, 36, 3);
  ctx.fill();
}

function drawRivetLine(x, y, count) {
  ctx.fillStyle = 'rgba(255,255,255,0.34)';
  for (let i = 0; i < count; i += 1) {
    ctx.beginPath();
    ctx.arc(x, y + i * 12, 1.7, 0, Math.PI * 2);
    ctx.fill();
  }
}

function addTireMark(car) {
  tireMarks.push({ x: car.x, y: car.y, angle: car.angle, life: 1 });
  if (tireMarks.length > 420) tireMarks.shift();
}

function drawTireMarks() {
  tireMarks.forEach((mark) => {
    mark.life *= 0.996;
    ctx.save();
    ctx.globalAlpha = Math.max(0, mark.life * 0.34);
    ctx.translate(mark.x, mark.y);
    ctx.rotate(mark.angle);
    ctx.fillStyle = '#050505';
    ctx.fillRect(-24, -15, 16, 4);
    ctx.fillRect(-24, 11, 16, 4);
    ctx.restore();
  });
}

function burst(x, y, color, count) {
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 80 + Math.random() * 260;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.35 + Math.random() * 0.45,
      color,
    });
  }
}

function updateParticles(dt) {
  particles.forEach((particle) => {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vx *= 0.96;
    particle.vy *= 0.96;
    particle.life -= dt;
  });
  particles = particles.filter((particle) => particle.life > 0);
}

function drawParticles() {
  particles.forEach((particle) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, particle.life);
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function showResults(winner) {
  cancelAnimationFrame(animationFrame);
  battleActive = false;
  resetControls();
  winnerName.textContent = winner?.name || 'No one';
  if (selectedMode === 'bumpers') {
    winnerScore.textContent = winner?.isPlayer ? `You won on ${selectedBumpersMap.name}.` : `${winner?.name || 'No one'} won on ${selectedBumpersMap.name}.`;
  } else {
    winnerScore.textContent = winner?.isPlayer ? `You won on ${selectedCrashMap.name}.` : `${winner?.name || 'No one'} won on ${selectedCrashMap.name}.`;
  }
  leaderboard.innerHTML = '';

  [...cars]
    .sort((a, b) => Number(!a.eliminated) - Number(!b.eliminated) || b.kills - a.kills || b.damageDone - a.damageDone)
    .reverse()
    .forEach((car, index) => {
      const row = document.createElement('div');
      row.className = 'leaderboard-row';
      const eliminationText = car.kills === 1 ? '1 elimination' : `${car.kills} eliminations`;
      row.innerHTML = `<span>#${index + 1}</span><strong>${car.name}</strong><span>${car.eliminated ? 'wrecked' : 'alive'} / ${eliminationText}</span>`;
      leaderboard.appendChild(row);
    });

  showScreen('results');
}

function getWinnerCandidate() {
  return [...cars]
    .sort((a, b) => {
      if (Number(!a.eliminated) !== Number(!b.eliminated)) {
        return Number(!b.eliminated) - Number(!a.eliminated);
      }
      if (b.kills !== a.kills) return b.kills - a.kills;
      if (b.damageDone !== a.damageDone) return b.damageDone - a.damageDone;
      return b.health - a.health;
    })[0] || null;
}

function updateHud() {
  const player = cars[0];
  if (!player) return;
  if (healthDisplay) healthDisplay.textContent = `${Math.ceil(Math.max(0, player.health))}%`;
  if (aliveDisplay) aliveDisplay.textContent = String(getAliveCars().length);

  if (boostHud && player) {
    if (selectedMatchType === 'online' && waitingForOnlineStart) {
      const count = getOnlinePlayerCount();
      const required = getRequiredOnlinePlayers();
      const needed = Math.max(0, required - count);
      boostHud.textContent = `Waiting for players: ${count}/${required} - ${needed} more needed`;
      return;
    }

    if (matchCountdownActive) {
      boostHud.textContent = `Match starts in ${Math.max(1, Math.ceil(matchCountdown))}`;
      return;
    }

    const maxBoosts = getMaxBoosts();
    const powerText = player.powerTimer > 0 ? ` | ${player.powerName}: ${Math.ceil(player.powerTimer)}s` : '';
    const mapName = selectedMode === 'bumpers' ? selectedBumpersMap.name : selectedCrashMap.name;
    const mapText = `${mapName} | `;
    if (player.boosts > 0) {
      boostHud.textContent = `${mapText}Boosts: ${player.boosts}/${maxBoosts}${powerText}`;
    } else {
      const remaining = Math.max(0, Math.ceil(BOOST_REFILL_SECONDS - player.boostRefillTimer));
      boostHud.textContent = `${mapText}Boosts refill: ${remaining}s${powerText}`;
    }
  }

  if (boostButton && player) {
    boostButton.disabled = player.boosts <= 0;
    boostButton.textContent = player.boosts > 0 ? 'BOOST' : 'WAIT';
  }
}

function getAliveCars() {
  return cars.filter((car) => !car.eliminated);
}

function forwardVector(car) {
  return {
    x: Math.sin(car.angle),
    y: -Math.cos(car.angle),
  };
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function normalizeAngle(angle) {
  let next = angle;
  while (next > Math.PI) next -= Math.PI * 2;
  while (next < -Math.PI) next += Math.PI * 2;
  return next;
}

function clamp(value, min, max) {
  if (max < min) return min;
  return Math.min(max, Math.max(min, value));
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  viewWidth = Math.max(360, rect.width);
  viewHeight = Math.max(560, rect.height);
  const targetWidth = viewWidth >= viewHeight ? 3840 : 2160;
  const targetHeight = viewWidth >= viewHeight ? 2160 : 3840;
  const deviceScale = Math.max(window.devicePixelRatio || 1, 3);
  canvas.width = Math.max(Math.floor(viewWidth * deviceScale), targetWidth);
  canvas.height = Math.max(Math.floor(viewHeight * deviceScale), targetHeight);
  renderScaleX = canvas.width / viewWidth;
  renderScaleY = canvas.height / viewHeight;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function colorMix(hex, amount, target) {
  const base = hexToRgb(hex);
  return `rgb(${Math.round(base.r + (target - base.r) * amount)}, ${Math.round(base.g + (target - base.g) * amount)}, ${Math.round(base.b + (target - base.b) * amount)})`;
}

function lighten(hex, amount) {
  return colorMix(hex, amount, 255);
}

function darken(hex, amount) {
  return colorMix(hex, amount, 0);
}

function setControl(control, value) {
  keys[control] = value;
  if (value && ['left', 'right', 'gas', 'brake', 'boost'].includes(control)) {
    if (!isOnlinePreMatch() && !isFrozenCountdown()) battleActive = true;
  }
  document.querySelectorAll(`[data-control="${control}"]`).forEach((button) => {
    button.classList.toggle('is-held', value);
  });
}

startGameButton.addEventListener('click', startGame);
restartRunButton.addEventListener('click', startGame);
finishRunButton.addEventListener('click', () => showResults(getWinnerCandidate()));
playAgainButton.addEventListener('click', () => {
  resetControls();
  waitingForOnlineStart = false;
  matchCountdownActive = false;
  matchCountdown = 0;
  countdownStartedAt = 0;
  updateOnlineStatus();
  showScreen('setup');
});

playerCount.addEventListener('change', () => {
  updateOpponentSelector();
  if (selectedMatchType === 'online') {
    updateOnlineStatus();
    maybeStartOnlineMatch();
  }
});

document.querySelectorAll('[data-control]').forEach((button) => {
  const control = button.dataset.control;
  button.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    setControl(control, true);
    if (control === 'boost') {
      window.setTimeout(() => setControl('boost', false), 80);
    }
  });
  button.addEventListener('pointerup', () => setControl(control, false));
  button.addEventListener('pointercancel', () => setControl(control, false));
  button.addEventListener('pointerleave', () => setControl(control, false));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') setControl('left', true);
  if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') setControl('right', true);
  if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') setControl('gas', true);
  if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') setControl('brake', true);
  if (event.key === ' ' || event.key.toLowerCase() === 'b' || event.key === 'Shift') {
    event.preventDefault();
    setControl('boost', true);
    window.setTimeout(() => setControl('boost', false), 80);
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') setControl('left', false);
  if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') setControl('right', false);
  if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') setControl('gas', false);
  if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') setControl('brake', false);
  if (event.key === ' ' || event.key.toLowerCase() === 'b' || event.key === 'Shift') setControl('boost', false);
});

window.addEventListener('resize', () => {
  if (!screens.game.classList.contains('hidden')) resizeCanvas();
});

renderCarChooser();
setupModeButtons();
setupMatchButtons();
updateOpponentSelector();
updateOnlineStatus();
showScreen('setup');
