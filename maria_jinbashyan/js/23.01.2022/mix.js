let arr = []
let arr1 = []
let id
async function showArrList() {
  arr  = await fetch('https://jsonplaceholder.typicode.com/posts')
  arr1 = await arr.json()
  let notesOnPage = 20;
  let fined1 = document.querySelector('#fined')
  let pagelist = Math.ceil(arr1.length / notesOnPage)
  let div = document.querySelector('#stylediv')
  let items = []
  for (let i = 1; i <= pagelist; i++) {
    let button = document.createElement('button')
    button.innerHTML = i
    fined1.appendChild(button)
    items.push(button)
  }
  for (let item of items) {
    item.addEventListener('click', function () {
      this.classList.add('active')
      let pageNum = + this.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage
      let notes = arr1.slice(start, end)
      stylediv.innerHTML = ''
      for (let note of notes) {
        let div1 = document.createElement('div')
        div1.className = 'posts'
        stylediv.appendChild(div1)
        list(note.title, note.body, div1)
      }
    })
  }
}
function showNone(element) {
  id = setTimeout(() => { element.style.display = "none" }, 5000)
  document.getElementById("undo").style.display = "block"
  document.getElementById("undo").style.display = "block"
  setTimeout (() => {
    document.getElementById("undo").style.display = "none"
  }, 5000)
}

function clearid(id) {
  clearTimeout(id)
}
function list(titelis, bodis, pos) {
  let bigist = document.createElement('div')
  let div2 = document.createElement('div')
  let post = document.createElement('div')
  let xbutton = document.createElement('button')
  xbutton.innerHTML = "x"
  bigist.className = 'post'
  document.getElementById('undo').onclick = () => clearid(id)
  xbutton.onclick = () => showNone(bigist)
  bigist.appendChild(xbutton)
  div2.innerHTML = titelis
  post.innerHTML = bodis
  bigist.appendChild(div2)
  bigist.appendChild(post)
  pos.appendChild(bigist)
}
function myFunction() {
  let element = document.getElementById("container");
  element.classList.toggle("dark-mode");
}
showArrList()
