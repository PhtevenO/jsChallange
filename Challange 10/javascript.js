const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes)

checkboxes.forEach(item => item.addEventListener('click', eventTest));

let lastChecked;

function eventTest(e){
    let inBetween = false;
    if (e.shiftKey && this.checked){
        checkboxes.forEach(boxes =>{
            if(boxes === this || boxes === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                boxes.checked = true;
            }
        })
    }
    
    lastChecked = this;
}