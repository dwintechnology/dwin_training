const BODY_BLOCK = document.getElementById("container");
const UNDO = document.querySelector(".undoBlock")
const NOTES_ON_PAGE = 20;
const DARK_MODE = document.querySelector("#darkMode");
const SEARCH = document.getElementById("search");
let items = document.querySelectorAll("#pagination li");
let mydiv = null;

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

for (let item of items) {
    item.addEventListener('click', function () {
        showNotes(item);
    });
};

showNotes(items[0]);

async function showNotes(pageNumElement, filteValue) {
    const posts = await getPosts();
    let pageNum = +pageNumElement.innerHTML;
    let start = (pageNum - 1) * NOTES_ON_PAGE;
    let end = start + NOTES_ON_PAGE;
    let notes = posts.slice(start, end);
    BODY_BLOCK.innerHTML = "";
    if (filteValue) {
        notes = notes.filter(el => el.body.toLowerCase().includes(filteValue.toLowerCase()))
    }
    for (let note of notes) {
        renderNotes(note);
    }
}


async function renderNotes(note) {
    mydiv = document.createElement("div");
    let deleteBotton = document.createElement("button");
    let newDiv = document.createElement("div");
    let closeDiv = document.createElement("div");

    mydiv.className = "myDiv";
    closeDiv.className = "closeDiv";
    deleteBotton.className = "close";
    newDiv.className = "newDiv";

    BODY_BLOCK.appendChild(mydiv);
    mydiv.appendChild(closeDiv);
    closeDiv.appendChild(deleteBotton);
    mydiv.appendChild(newDiv);
    newDiv.innerHTML = note.body;

    deleteBotton.addEventListener("dblclick", function () {
        let t = 10;
        let time = t - 1;
        UNDO.classList.toggle("active");
        let timer = document.createElement("text");
        UNDO.appendChild(timer);
        timer.className = "timer";
        let myInterval = setInterval(() => {
            timer.textContent = time;
            time = time - 1;
        }, 1000)
        let id = setTimeout(() => {
            mydiv.style.display = 'none';
            UNDO.classList.toggle("active");
            clearInterval(myInterval)
        }, t * 1000)
        UNDO.onclick = function () {
            clearTimeout(id)
            clearInterval(myInterval)
            UNDO.classList.toggle("undoBlock")
        }
    });

}

DARK_MODE.onclick = function () {
    BODY_BLOCK.classList.toggle("container_dark");
    document.body.style.backgroundColor = "rgb(150, 164, 245)";
}
SEARCH.addEventListener('input', async function (e) {

    showNotes(items[0], e.target.value)

})



