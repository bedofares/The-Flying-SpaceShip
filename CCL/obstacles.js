const obstaclesArry = [];
const ob1 = new Image();
ob1.src = 'ob1.png';
const ob2 = new Image();
ob2.src = 'ob2.png';

const moveob = new Image();
 moveob.src = 'moveOb.png';

class Obstacles {
    constructor(){
        this.top = (canvas.height / 5 )  ;
        this.bottom = (canvas.height / 5 )  ;
        //this.bottom1 = (Math.random() * canvas.height / 3 ) +80 ;
        this.x = Math.floor(Math.random()* canvas.width )  ;
        this.y = Math.floor(Math.random()* canvas.height -50 )  ;
        this.width = 80;
        this.widthOb = 290; // obstical width
       /// this.color = 'hsla(' + hue + ',100% , 50% , 0.8 )';
        //this.color = "white";
      //  this.counted = false;
        
    }

    draw(){
        //ctx.fillStyle = this.color;
         //ctx.fillRect(this.x , this.y, this.width , this.top);
        // ctx.drawImage(ob1, this.x - 93 ,0, this.widthOb  , this.top + 40);
        //ctx.fillRect(this.x + 100 , canvas.height  - this.bottom , this.width , this.bottom  );
        ctx.drawImage(moveob , this.x , this.y , this.width +250 , this.bottom +80 );
    }

    /*update(){
        this.x -=  gamespeed;
        if(!this.counted && this.x <bird.x){
            socre++;

            this.counted = true;
        }
        this.draw();
    }*/
}

function handleObstacles(){
    if(frame%100 === 0){
        obstaclesArry.unshift(new Obstacles);
    }

    for(let i = 0 ; i <obstaclesArry.length ; i++){
        obstaclesArry[i].update();
    }

    if(obstaclesArry.length > 5){
        obstaclesArry.pop(obstaclesArry[0]);
    }

}

