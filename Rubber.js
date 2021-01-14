class Rubber {
    constructor(x,y) {
        var options = {
            restitution: 0.5,
            density: 1.5,
            friction: 1.0
        }
         Matter.Bodies.circle(x,y,20,options);
        this.radius = 20;
        Matter.Body.setAngle(this.body,angle);
          World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        pop();
    }
}





