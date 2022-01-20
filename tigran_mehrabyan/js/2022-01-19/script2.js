// promis.all() implementation

function all(...args){

    return new Promise((resolve, reject) => {
        let results = []
        let err = null
        for (let item of args) {
            item.then((res) => results.push(res)).catch((error) => {
                if(err == null){
                    err = error;
                } 
            })
        }
        (err == null) ? resolve(results) : reject(err); 
    })        
}


