const robo = {
    x : 0,
    y : 0,
    direction : "nord",
    tourne(){
        switch (this.direction) {
            case "nord":
                this.direction = "est"
                break;

            case "est":
                this.direction = "sud"
                break;

            case "sud":
                this.direction = "ouest"
                break;

            case "ouest":
                this.direction = "nord"
                break;
            default:
                break;
        }
    },
    move(){
        switch (this.direction) {
            case "nord":
                this.y=this.y+1
                break;

            case "est":
                this.x=this.x+1
                break;

            case "sud":
                this.y=this.y-1
                break;

            case "ouest":
                this.x=this.x-1
                break;
            default:
                break;
        }

    }
}

robo.move()
robo.move()
robo.tourne()
robo.move()

console.log(robo);