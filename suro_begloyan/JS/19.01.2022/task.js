const HOST = "https://jsonplaceholder.typicode.com";
const ENDPOINTS = {
    posts: "/posts",
    post: "/posts/:id",
    comment: "/posts/:id/comments"
};
let postsList = [];


async function getPosts() {
    const postsUrl = HOST + ENDPOINTS.posts;
    const ress = await fetch(postsUrl);
    const response = await ress.json();
    return response;
}

async function getPostsAndComennts() {
    const posts = await getPosts();
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const commentUrl = (HOST + ENDPOINTS.comment).replace(":id", post.id);
        const comment = await fetch(commentUrl);
        const commentJson = await comment.json();
        post.comment = commentJson;
        console.log(`Loaded ${i} posts...`)
    }
    return posts;
}
async function findBigComment() {
    const posts = await getPostsAndComennts();

    let id = -1;
    let maxLength = "";
    let bigPost = {};
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const comments = post.comment;
        let body = "";
        for (let k = 0; k < comments.length; k++) {
            const comment = comments[k];
            body += comment.body;
        }
        if (body.length > maxLength.length) {
            bigPost = post;
            id = post.id;
            maxLength = body;
        }
    }
    //const bigPost = posts.find((i) => i.id == id)
    console.log(bigPost)
    console.log(id, maxLength)
    console.log(posts)
}

findBigComment();