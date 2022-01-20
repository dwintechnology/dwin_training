
const USER_HOST = "https://api.github.com/users/${name}";


async function getUserInfo(name) {
    try {
        let userHost = await fetch(`USER_HOST`)
        let userHostJson = await userHost.json();
        if (userHostJson.message === "Not Found") {
            throw new Error(`${name}`)
        }
        return userHostJson;
    } catch (err) {
        console.log(`${err} not found`)
        throw err
    }
}
let arr = ['Jorj99', 'Davtyan92S', 'Pogosikic8888'];

async function getUsers(arr) {
    let success = [];
    let errors = [];
    let results = [];
    try {
        for (i of arr) {
            let user = await getUserInfo(i);
            success.push(user)
        }
    } catch (err) {
        errors.push(err)
    }
    console.log(success)
    console.log(errors)

    results = [success, errors];
    console.log(results)
    return results;
}