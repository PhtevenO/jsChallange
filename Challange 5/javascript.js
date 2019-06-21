let panels = document.querySelectorAll('.panel');

function hover(){
   this.classList.toggle('open')
}

function words(e){
    console.log(e.propertyName.includes('flex'));
    this.classList.toggle('open-active');
}



panels.forEach(panel=> panel.addEventListener('click', hover));
panels.forEach(panel=> panel.addEventListener('transitionend', words));