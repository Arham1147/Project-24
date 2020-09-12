class paper {

    constructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.height = height;
    this.width = width;
     this.body = Bodies.rectangle(x,y,width,height,options);
   World.add(world,this.body);
  }
    display(){
    
    var pos = this.body.position;
    rectMode(CENTER);
    fill(293,62,99);
    rect(pos.x, pos.y, this.width, this.height);
    }
  };