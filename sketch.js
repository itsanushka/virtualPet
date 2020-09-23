//Create variables here
var dog
var happyDog 
var database
var foodS
var foofStock
var dog1

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);
  dog1= createSprite(250,250)
  dog1.addImage(dog)
  dog1.scale=0.1
  foodStock= database.ref("foodd")
  foodStock.on("value",readStock)


  
}


function draw() {  
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage(happyDog)
  }
  drawSprites();
  textSize(10)
  text("note: press UP_ARROW t feed the dog milk",100,250)
  
  //add styles here

}

function readStock(data){
  foodS= data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').set({
    foodd:x 
  })
}



