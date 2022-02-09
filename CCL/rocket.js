const rocketSprite = new Image();
rocketSprite.src = "./others/spacecar3.png";

//A blueprint
class Rocket {
    // hold the blueprint information
    constructor() {
        this.x = 110; //Rocket constant x postion
        this.y = 80; //Rocket startup y postion
        this.flyingspeed = 0;// this will determine vertical speed of our player speed, How fast it falls and moves up.
        this.width = 60;
        this.height = 68;
        this.weight = 1; // force pulling the rocket down
        this.frameX = 0; //control the spritesheet


        //tip second rect
        this.width1 = 40;
        this.height1 = 40;
        this.x1 = 165;
        this.y1 = 93;

        //rocket  setup
        this.rocketwidth = 185;
        this.rocketheight = 135;
        this.originalWidth = 1705;// width of one frame of the spritesheet
        this.originalHeight = 646;// height of the spritesheet



    }

    update() {

        this.flyingspeed += this.weight;//rocket physices
        this.flyingspeed *= 0.7;  // how fast it goes up and down
        this.y += this.flyingspeed;
        this.y1 += this.flyingspeed;


        // rocket boundries
        //canvas bottom
        if (this.y > canvas.height - this.height - 13) {
            this.y = canvas.height - this.height - 13;
            this.flyingspeed = 0;//stop its moving
            //canvas top
        } else if (this.y < 0 + 10) {
            this.y = 0 + 10;
            this.flyingspeed = 0;
        }

        //tip boundrais
        //canvas bottom
        if (this.y1 > canvas.height - this.height) {
            this.y1 = canvas.height - this.height;
            this.flyingspeed = 0;

            //canvas top
        } else if (this.y1 < 0 + 23) {
            this.y1 = 0 + 23;
            this.flyingspeed = 0;
        }



        if (spacePressed) { this.fly(); }


    }

    draw() {
         //ctx.fillStyle="black";
         //ctx.fillRect(this.x , this.y , this.width , this.height); 
         //ctx.fillStyle="blue";
         //ctx.fillRect(this.x1  , this.y1 , this.width1 , this.height1);
        //first four attributes are the rectangualr area we need to cut out from the source image
        ctx.drawImage(rocketSprite, this.frameX * this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x - 55, this.y - 33, this.rocketwidth, this.rocketheight);
    }

    //giving the player a push upwards
    fly() {
        this.flyingspeed -= 2;
        if (this.frameX >= 3) { this.frameX = 0; }//gives the shape of flame incrasing and decreasing

        else if (frame % 3 === 0) this.frameX++; //increase the framex every 3 frames
    }
}

const rocket = new Rocket();
/*instance for that class
"new keyword will call our class constarctor create a new blank object, assign its proprties and values as defined inside class constractor.
gives full accsess to custom class methods"
*/
