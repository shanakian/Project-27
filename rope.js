class Rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options={

        bodyA: body1,
        bodyB: body2,
        stiffness: 0.04,
        length: 10,

        pointB:{x:this.offsetX, y:this.offsetY}
        }
        
    }
}
