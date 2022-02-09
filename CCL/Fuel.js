const fuel = new Image();
fuel.src = './others/fueltank.png';

const fuelArray = [];
class FuelTank {
    constructor() {
        this.x = canvas.width + Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = gamespeed * 2;
        this.width = 50;
        this.height = 70;
        this.counted = false;

     

    }

    update() {
         this.x -= this.speed;
        //Boundries for the fuel tank  to prevent them from going outside my canvas
        if (this.y > canvas.height - (this.height + 11)) {
            this.y = canvas.height - (this.height + 11);
        } else if (this.y < 0 + 2) {
            this.y = 0 + 2;
        }

       

    }
    draw() {

       // ctx.fillStyle = 'yellow';
        //ctx.fillRect(this.x, this.y , this.width , this.height);
        ctx.drawImage(fuel, this.x -30 , this.y - 5 , this.width * 2, this.height * 1.2);
    }
}


function handelfuel() {

    if (frame % 550 === 0) {
        setTimeout(() => {
            
        
        fuelArray.push(new FuelTank());
    }, 3000);
    }
    for (let i = 0; i < fuelArray.length; i++) {
        
        fuelArray[i].update();
        fuelArray[i].draw();
    }

}