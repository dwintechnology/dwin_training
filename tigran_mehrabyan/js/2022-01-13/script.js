function StopWatch(){
    this.mainVar = 0;
    let id;
    let speed = 1;

    this.start = function(){
        id = setInterval(() => {this.mainVar += speed}, 1000);
    }
    this.pause = function(){
        clearInterval(id);
    }
    this.stop = function(){
        clearInterval(id);
        this.mainVar = 0;
    }
    this.getTime = function(){
        return new Date(this.mainVar * 1000).toISOString().substr(11, 8)
    }
    this.setSpeed = function(s){
        speed += (s-1) ;
    }
    this.toString = function(){
        return this.getTime()
    }
    this.valueOf = function(){
        
        return this.mainVar;
    }
}
function speedUp(obj, number){
    obj.mainVar += number;
}

