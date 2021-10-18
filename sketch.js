var database;
var form, game, player;
var playerCount, gameState;
var carromBoard, blackCoin, redCoin, striker;
var carromBoardImg, blackCoinImg, redCoinImg, strikerImg;
var coin1, coin2
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var world
var engine


function preload(){
  carromBoardImg = loadImage("carromBoard.png");
redCoinImg = loadImage("coin1.png");
  blackCoinImg = loadImage("coin2.png");
  strikerImg = loadImage("striker.png")
}

function setup() {
  createCanvas(1000,600);
  
  database = firebase.database()
  game = new Game();
  form = new Form();

  engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(0);  
  image(carromBoardImg,250,50,500,500)

  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  form.display();
  game.display();
  drawSprites();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
