// async function getUserInfo(name) {
//     let a = await fetch(`https://api.github.com/users/${name}`)
//     let b = await a.json()
//     console.log(b)
//     if (b.message === "Not Found") {
//         throw new Error("User Not Found ")
//     }
// }
let abc = ["AnnaDwin", "oiuy", "ArmanKhoyetsyan","ArmanKhoyetsyan4", "Jorj99", "asdfgh"]

async function getUserInfo(name) {
    try {
        let a = await fetch(`https://api.github.com/users/${name}`)
        let b = await a.json()
        if (b.message === "Not Found") {
            throw name
        }
        return b
    } catch (err) {
        throw err
    }
}
async function getUsersInfo(arr) {
    let exists = []
    let doesNotExist = []
    let allArr = []
    try {

        for (let i = 0; i < arr.length; i++) {
            let x = await getUserInfo(arr[i])
            exists.push(x)
        }
    } catch (err) {
        doesNotExist.push(err)
    }
    allArr = [exists, doesNotExist]
    console.log(allArr)
    return allArr
}
