class Box{
    constructor (x,y,w,h){
      var options = {
        restitution : 0,
        friction : 0.3,
        density : 1.0

      }

      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = w;
      this.height = h;
      this.body.debug = true;
      World.add(world,this.body);
    }

    display () {

      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
  
  
  }
}

