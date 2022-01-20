let bodyBlock = document.getElementById("container");
let smallFirstBlock = bodyBlock.children[0];
// smallFirstBlock.innerHTML = "Hallo world";
const HOST = "https://jsonplaceholder.typicode.com";
const ENDPOINTS = {
    posts: "/posts",
    post: "/posts/:id",
    comment: "/posts/:id/comments"
};


async function getPosts() {
    const postsUrl = HOST + ENDPOINTS.posts;
    const ress = await fetch(postsUrl);
    const response = await ress.json();
    return response;
}
async function showBodyText() {
    const posts = await getPosts();
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        console.log(post)
        let mydiv = document.createElement("div")
        let deleteBotton = document.createElement("button");
        let newDiv = document.createElement("div");
        let closeDiv = document.createElement("div");
        mydiv.className = "myDiv";
        closeDiv.className = "closeDiv"
        deleteBotton.className = "close"
        newDiv.className = "newDiv";
        bodyBlock.appendChild(mydiv);
        mydiv.appendChild(closeDiv);
        closeDiv.appendChild(deleteBotton);
        mydiv.appendChild(newDiv);
        newDiv.innerHTML = post.body;


        deleteBotton.addEventListener("click", function () {
            mydiv.style.display = 'none';
        });

    }

}
showBodyText();
