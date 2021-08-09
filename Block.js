class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 225;
      this.image =  loadImage("Rectangle.png")
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed <5){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,this.width, this.height)
      pop();
      
    }
  }
}