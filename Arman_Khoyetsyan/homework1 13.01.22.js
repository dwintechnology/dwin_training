function createStopwatch() {
    let secend = 0;
    let minute = 0
    return {
        start: function () {
            let id = setInterval(function () {
                console.log(minute,++secend)
                if (secend === 60) {
                    console.log(++minute, secend)
                    secend = 0
                }
            }, 1000)
        }
    }
}
let t1 = createStopwatch()
//t1.start()