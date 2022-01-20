let arr = []
let arr1 = []
async function u() {
    let arr = await fetch('https://jsonplaceholder.typicode.com/posts')
    let arr1 = await arr.json()
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    for (let index = 0; index < 20; index++) {
        let postbig = document.createElement("div")
        let post1 = document.createElement("div")
        let post2 = document.createElement("div")
        let post3 = document.createElement("div")
        post1.className = "post"
        postbig.className = "bigposts"
        post2.innerHTML = arr1[index].title;
        post3.innerHTML = arr1[index].body
        postbig.appendChild(post1)
        post1.appendChild(post2)
        post1.appendChild(post3)
        document.getElementById("uf").appendChild(postbig);
    }
    for (let index = 20; index < 40; index++) {
        let postbig1 = document.createElement("div")
        let post3 = document.createElement("div")
        let post4 = document.createElement("div")
        let post5 = document.createElement("div")
        post3.className = "post"
        postbig1.className = "bigposts"
        post4.innerHTML = arr1[index].title;
        post5.innerHTML = arr1[index].body
        postbig1.appendChild(post3)
        post3.appendChild(post4)
        post3.appendChild(post5)
        document.getElementById("uf1").appendChild(postbig1);
    }
    for (let index = 40; index < 60; index++) {
        let postbig2 = document.createElement("div")
        let post5 = document.createElement("div")
        let post6 = document.createElement("div")
        let post7 = document.createElement("div")
        post5.className = "post"
        postbig2.className = "bigposts"
        post6.innerHTML = arr1[index].title;
        post7.innerHTML = arr1[index].body
        postbig2.appendChild(post5)
        post5.appendChild(post6)
        post5.appendChild(post7)
        document.getElementById("uf2").appendChild(postbig2);
    }
    document.getElementById("myBtn2").addEventListener("click", function() {
        myFunction2(document.getElementById("uf"),document.getElementById("uf1"));
      });
      document.getElementById("myBtn3").addEventListener("click", function() {
        myFunction2(document.getElementById("uf1"),document.getElementById("uf2"));
      });
      function myFunction2(a,b) {
        a.style.display = "none"
        b.style.display = "flex"
      }
}
function myFunction() {
    let element = document.getElementById("container");
    element.classList.toggle("dark-mode");
 }
 
u()