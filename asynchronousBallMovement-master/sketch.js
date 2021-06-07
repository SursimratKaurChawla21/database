var ball;
var db;
var b

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db=firebase.database()
    db.ref("ball/position").on("value",position)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writepos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
 function position(a){
 b=a.val()
 ball.x=b.x
 ball.y=b.y
 }
  
 function writepos(r,s){
 db.ref("ball/position").set({x:b.x+r,y:b.y+s})
 }
