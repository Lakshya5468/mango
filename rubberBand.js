class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA.body,
            pointB: pointB,
            length: 10,
            stiffness: 0.004
        }
        this.chain=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    display(){
        push();
        var pointB=this.chain.bodyA.position;
        strokeWeight(4);
        stroke(158, 22, 22);
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
        pop();
    }
    fly(){
    this.chain.bodyA=null;
    }
    attach(body){
    this.chain.bodyA=body;
    }
    }