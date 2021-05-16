var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
var g1, g2, g3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

    packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

    g1Sprite = createSprite(320, 620, 20, 100);
	g1Sprite.shapeColor = color("red")

	g2Sprite = createSprite(390	, 665, 150, 10);
	g2Sprite.shapeColor = color("red")

	g3Sprite = createSprite(455	,620, 20, 100);
	g3Sprite.shapeColor = color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { isStatic: true });
	World.add(world, packageBody);

	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	g1 = Bodies.rectangle(320, 620, 20, 100);
	World.add(world, g1);

    g2 = Bodies.rectangle(390, 665, 150, 10);
	World.add(world, g2);

	g3 = Bodies.rectangle(455, 620, 20, 100);
	World.add(world, g3);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	drawSprites();

}

function keyPressed() {
  if(keyCode === DOWN_ARROW)
	Body.setStatic(packageBody, false)

}



