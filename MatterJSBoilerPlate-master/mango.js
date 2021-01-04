class Mango {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'isStatic':true
        }
        this.body = Bodies.circle(x,y,40, options);
        this.r = 40;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
     }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    
      }
    }
  
