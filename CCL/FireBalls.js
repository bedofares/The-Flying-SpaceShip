const flameFire = new Image();
flameFire.src = './others/moveOb.png';

const fireBallsArray = [];
class FireBalls {
    constructor() {
        this.x = canvas.width + Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = gamespeed * 2.5;
        this.width = 50;
        this.height = 70;
        this.counted = false;

        //fireballs setup
        this.ballswidth = 220;
        this.ballsheight = 310;

    }

    update() {
        this.x -= this.speed;//moving the fireballs in the opposite direction
        //Boundries for the fire ball to prevent them from going outside the canvas
        if (this.y > canvas.height - (this.height + 7)) {
            this.y = canvas.height - (this.height + 7);
        } else if (this.y < 0) {
            this.y = 0;
        }
        
        //control the score
        if (!this.counted && this.x < rocket.x) {
            socre++;
            this.counted = true;

        }

    }
    draw() {

        //ctx.fillStyle = 'yellow';
        //ctx.fillRect(this.x, this.y , this.width , this.height);
        ctx.drawImage(flameFire, this.x - 71, this.y - 132, this.ballswidth, this.ballsheight);
    }
}


    

function handelFireBalls() {

    if (frame % 100 === 0) {
        setTimeout(() => {
        fireBallsArray.push(new FireBalls());
    }, 3000);
    }
    
    for (let i = 0; i < fireBallsArray.length; i++) {
        fireBallsArray[i].update();
        fireBallsArray[i].draw();
    }

}

