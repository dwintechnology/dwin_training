'use strict';


// animation





const animItems = document.querySelectorAll('.anim_items');
  
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeigh = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeigh / animStart;
      if (innerHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeigh)){
                animItem.classList.add('_active');			
            } 
   //    else {
            // 	if (!animItems.classList.contains('_anim-no-hide')) {
            // 		animItem.classList.remove('_active');
            // 	}
            // }
        }
    } 
   

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}	
}

let header = document.querySelector('.header');

header.onmousemove = function() {  animOnScroll();}


}
// animation