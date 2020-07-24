class Bob { 
    constructor(x,y,r){
        var option = {
            isStatic:false, 
            restitution:1,
            friction:0,
            density:0.8,
        }  
        this.x=x; 
        this.y=y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,option);  
        World.add(world,this.body);  
        
         

    } 
    display(){
        var pos = this.body.position; 
        var angle = this.body.angle; 
        push(); 
        translate(pos.x,pos.y);
        rotate(angle); 
        ellipseMode(RADIUS); 
        fill(255);
        ellipse(0,0,this.r,this.r); 
        pop(); 
        
    }

}