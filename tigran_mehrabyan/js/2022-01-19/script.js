// homework task

async function foo1(){
    let tempArray = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let array = await tempArray.json()
    for (let i = 0; i < array.length; i++) {
        let tempComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${i + 1}/comments`);
        let comments = await tempComments.json();
        array[i].comment = comments
    }
    // return array /* task1*/
    let sortedArray = array.sort((a,b) => {
        const aaa = a.comment.reduce((a,b) => a + b.body.length, 0);
        const bbb = b.comment.reduce((a,b) => a + b.body.length, 0);
        return aaa - bbb;
    })
    return sortedArray[sortedArray.length - 1] /* task2 */
}


