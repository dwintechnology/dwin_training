let arr = []
let arr1 = []
async function htmlTocss() {
    let arr = await fetch('https://jsonplaceholder.typicode.com/posts')
    let arr1 = await arr.json()
    for (let index = 0; index < 20; index++) {
        let firstdiv = document.createElement("div")
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        div1.className = "div1style"
        firstdiv .className = "firstdivstyle"
        div2.innerHTML = arr1[index].title;
        div3.innerHTML = arr1[index].body
        firstdiv.appendChild(div1)
        div1.appendChild(div2)
        div1.appendChild(div3)
        document.getElementById("style").appendChild(firstdiv);
    }}function myFunction() {
        let element = document.getElementById("container");
        element.classList.toggle("dark-mode");
     }
     htmlTocss()