var movingrect,fixedrect ; 

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(600, 100, 150, 100);
  fixedrect=createSprite(400, 200, 100, 150);

  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
}

function draw() {
  background(0);  
 
 movingrect.x=World.mouseX;
 movingrect.y=World.mouseY;
 
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
      fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
      movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
      fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 )
  {
         movingrect.shapeColor="yellow"


  }
  else 
  {
movingrect.shapeColor = "blue";
    
  }




  drawSprites();
}