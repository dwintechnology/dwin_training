let arr = ['g@mail.com', 'm@mail.ru', 'y@yahoo.com']
function sendEmails(arr) {
    function sendEmail(mail) {
        return (mail += " " + "halooo!!!!")
    }

    return new Promise(function (resolve, reject) {
        let newArr = arr.map(email => {
            return sendEmail(email)

        });
        setTimeout(() => { resolve(newArr) }, 2000)
    }).then(console.log)
}
sendEmails(arr)