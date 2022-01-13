function StopWatch(){
    this.mainVar = 0;
    let id;

    this.start = function(){
        id = setInterval(() => {this.mainVar ++}, 1000);
    }
    this.pause = function(){
        clearInterval(id);
        clearInterval(speedId);
    }
    this.stop = function(){
        clearInterval(id);
        clearInterval(speedId);
        this.mainVar = 0;
    }
    this.getTime = function(){
        let sec = this.mainVar % 60;
        let min = Math.floor(this.mainVar / 60) % 60;
        let hour = Math.floor(min / 3600) % 60;
        return `${hour} : ${min} : ${sec}`;
    }
    this.setSpeed = function(s){
        speedId = setInterval(() => {this.mainVar ++}, s * 1000);
    }
}
