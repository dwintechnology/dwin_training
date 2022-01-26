
// async function getPost() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let y = await x.json();
//     for (let i = 0; i < y.length; i++) {
//         itmeId = y[i].id
//         let comment = await fetch(`https://jsonplaceholder.typicode.com/posts/${itmeId}/comments`)
//         let userComment = await comment.json()
//         y[i].comment = userComment
//     }
//     console.log(y)
//     return y
// }

// async function sortPost() {
//     let posts = await getPost();
//     let maxLenght = 0;
//     let maxPost;
//     for (let i of posts) {
//         let sumCommBody = "";
//         for (let item of i.comment) {
//             sumCommBody = sumCommBody + item.body;
//         }
//         if (sumCommBody.length > maxLenght) {
//             maxPost = i;
//             maxLenght = sumCommBody.length
//         }
//     }
//     console.log(maxPost);
//     return maxPost
// }
