class Tree {
    constructor(x,y,width,height){
    
        var options={

            isStatic:true,
            restitution:0,
            friction:0,
            density:0
                
            
            }

            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;

            this.image=loadImage("sprites/Plucking mangoes/tree.png");
            this.body=Bodies.rectangle(this.x,this.y,this.width,this.height, options);
            World.add(world,this.body);

    }


    display(){


        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


    }
}
        
    