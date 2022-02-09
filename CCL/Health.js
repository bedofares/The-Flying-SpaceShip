class Health {
    constructor() {
        //fuel bar setup
        this.x = 41;
        this.y = 11;
        this.health = 98;
        this.healthHeight = 24;
        //fuel bar border
        this.postionx = 40;
        this.postiony = 10;
        this.height = 26;
        this.width = 100;

        this.healthPercentage = 100;




    }

    draw() {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = "2";
        ctx.strokeRect(this.postionx, this.postiony, this.width, this.height);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.health, this.healthHeight);
        ctx.fillStyle = 'white';
        ctx.font = 'bolder 15px Arial';
        ctx.fillText(this.healthPercentage + '%', 80, 28, 30, 5);
        ctx.drawImage(fuel, 5, 10, 30, 27);
    }

    update() {
        //health bar boundries
        // If the health reached zero stop moving to left
        if (this.health <= 0) {
            this.health = 0;
            rocket.flyingspeed = 0;
        //If the health reached 98 stop increasing
        } else if (this.health > 98) {
            this.health = 98
        }

        //counter limmiting
        if (this.healthPercentage <= 0) {
            this.healthPercentage = 0;

        } else if (this.healthPercentage >= 100) {
            this.healthPercentage = 100;
        }

        // Play waring sound
        if (this.healthPercentage <= 30) {
            audio.play();//game sound
        }

    }
}

const health = new Health();
/*instance for that class
"new keyword will call our class constarctor create a new blank object, assign its proprties and values as defined inside class constractor.
gives full accsess to custom class methods"
*/