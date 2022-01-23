let bodyBlock = document.getElementById("container");
let smallFirstBlock = bodyBlock.children[0];
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
};
let notesOnPage = 20;
let items = document.querySelectorAll("#pagination li");
for (let item of items) {
    item.addEventListener('click',  function () {
        shownotes(this);
    });
};
shownotes(items[0]);
async function shownotes(item) {
    const posts = await getPosts();
    let pageNum = +item.innerHTML;
    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;
    let notes = posts.slice(start, end);
    bodyBlock.innerHTML = "";
    for (let note of notes) {
        let mydiv = document.createElement("div");
        let deleteBotton = document.createElement("button");
        let newDiv = document.createElement("div");
        let closeDiv = document.createElement("div");
        mydiv.className = "myDiv";
        closeDiv.className = "closeDiv";
        deleteBotton.className = "close";
        newDiv.className = "newDiv";
        bodyBlock.appendChild(mydiv);
        mydiv.appendChild(closeDiv);
        closeDiv.appendChild(deleteBotton);
        mydiv.appendChild(newDiv);
        newDiv.innerHTML = note.body;
        deleteBotton.addEventListener("click", function () {
            mydiv.style.display = 'none';
        });
    }
}
