class Snake {
    constructor(){
        this.body=[]
        this.body[0] = createVactor(floor(w/2), floor(h/2))
        this.xDir = 0
        this.yDir = 0
        this.length = 0

    }

    setDir(x, y){
        this.xDir = x;
        this.yDir = y;

    }

    grow(){
        var head = this.body[this.body.length - 1].copy();
        this.length+=1;
        this.body.push(head);

    }

    update(){
        var head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x = head.x + this.xDir;
        head.y = head.y + this.yDir;
        this.body.push(head);

    }

    display(){
        for( var i = 0; i < this.body.length; i++){
            fill(0);
            rect(this.body[i].x , this.body[i].y, 1, 1);

        }
    }
}