class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    attach(body){
        this.string.bodyA = body;
    }
    
 

    display(){
        if(this.string.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
                strokeWeight(7);
                line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
    
}