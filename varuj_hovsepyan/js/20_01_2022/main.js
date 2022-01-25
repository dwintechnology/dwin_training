let arr = []
let arr1 = []
let arrtitle = []
async function mu() {
  arr = await fetch('https://jsonplaceholder.typicode.com/posts')
  arr1 = await arr.json()
  // for(let bu =0; bu < arr1.length; bu++){
  //   let x = await arr1[bu]
  //   arrtitle.push(x)
  // }
  let notesOnPage = 20;
  let esim = document.querySelector('#es')
  let h = Math.ceil(arr1.length / notesOnPage)
  let div = document.querySelector('#uf')
  let items = []
  for (let i = 1; i <= h; i++) {
    let btn = document.createElement('button')
    btn.innerHTML = i
    esim.appendChild(btn)
    items.push(btn)
  }
  for (let item of items) {
    item.addEventListener('click', function () {
      this.classList.add('active')
      let pageNum = + this.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage
      let notes = arr1.slice(start, end)
      uf.innerHTML = ''
      for (let note of notes) {
        let div1 = document.createElement('div')
        div1.className = 'bigposts'
        uf.appendChild(div1)
        juli(note.title, note.body, div1)

      }
    })

  }

}
function myFunction3(element) {
  id = setTimeout(() => { element.style.display = "none" }, 5000)
  document.getElementById("undo").style.display = "block"
  setTimeout (() => {
    document.getElementById("undo").style.display = "none"
  }, 5000)
}
function myFunction4(id) {
  clearTimeout(id)
}
function juli(te1, te2, tr) {
  let pi = document.createElement('div')
  let div2 = document.createElement('div')
  let post = document.createElement('div')
  let close_button1 = document.createElement('button')
  close_button1.innerHTML = "X"
  pi.className = 'post'
  document.getElementById('undo').onclick = () => myFunction4(id)
  close_button1.onclick = () => myFunction3(pi)
  pi.appendChild(close_button1)
  div2.innerHTML = te1
  post.innerHTML = te2
  pi.appendChild(div2)
  pi.appendChild(post)
  tr.appendChild(pi)
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
  }

  let items2 = document.querySelectorAll('.post');
  items2.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
}
function myFunction() {
  let element = document.getElementById("container");
  element.classList.toggle("dark-mode");
}


butt.addEventListener = ('keyup', (e) => {
  

})
// butt.onclick = async function() {
//   var val = document.getElementById('elem1').value;
 
  
//     if( arrtitle.indexOf(val) ){
//       await document.getElementById('str').innerHTML(arrtitle)
//     }else{
//       console.log("chqta exo jan")
//     }

// }
   
  
// }; 

mu()
