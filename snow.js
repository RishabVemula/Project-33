class Snow {
    constructor(x,y,radius) {
      var options = {
          restitution : 1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
     
      World.add(world, this.body);
      this.image = loadImage("snow5.webp")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };
