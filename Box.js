class Box  {
    constructor(x,y)  {
        var options={
            isStatic:false
        }
        
        this.body = Bodies.rectangle(x,y,20,30,options)
        this.width = 20;
        this.height = 30;

        World.add(world,this.body)

    }
    display()  {
        rectMode(CENTER);
        fill("blue")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}
