let sec = 0;
        let min = 0;
        let hour = 0;
        let start = setInterval(function () {
            console.log(`${hour}:${min}:${sec}`)
            if (sec / 60 == 1) {
                min++;
                sec = 0;
                if (min / 60 == 1) {
                    hour++;
                    min = 0;
                }
            }
            sec++;
        }, 1000);
        let pause = () => clearInterval(start);