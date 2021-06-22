const score = document.querySelector('.score'),
  game = document.querySelector('.game'),
  start = document.querySelector('.start'),
  gameArea = document.querySelector('.game-area'),
  car = document.createElement('div');

car.classList.add('car'); 

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

const settings = {
  start: false,
  score: 0,
  speed: 3,
};

const playGame = () => {
  console.log('Play Game!');
  if (settings.start) {
    requestAnimationFrame(playGame);
  }
}

const startGame = () => {
  start.classList.add('hide');
  settings.start = true;
  gameArea.append(car);
  requestAnimationFrame(playGame);
};

const startRun = (e) => { 
  e.preventDefault();
  keys[e.key] = true;
};

const stopRun = (e) => { 
  e.preventDefault();
  keys[e.key] = false;
};

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
