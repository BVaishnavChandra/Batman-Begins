//class for the raindrops
class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.1
        }
          this.body = Bodies.circle(x, y, 10, options);
          this.radius = 5;
          World.add(world, this.body);
    }
   
    changePosition(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 400), y:random(0, 400)});
      }
    }
  
    display(){
      strokeWeight(1);
      stroke("blue");
      fill("blue");
      var posX = this.body.position.x ;
      var posY = this.body.position.y ;
      ellipseMode(CENTER);
      ellipse(posX, posY, this.radius, this.radius);
    }
  
  
  }