class Tree {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, 300, 350, options);
        this.width = 300;
        this.height = 350;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       // pos.x = mouseX;
       // pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
      //  rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
