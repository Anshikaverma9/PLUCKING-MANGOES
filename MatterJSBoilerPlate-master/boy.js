class Boy {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, 180, 180, options);
        this.width = 180;
        this.height = 180;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
      //  pos.x = mouseX;
      //  pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}