let select = document.querySelectorAll('.controls input');
function updateVal(){
    let suff = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suff);
}

select.forEach(input => input.addEventListener('change', updateVal));
select.forEach(input => input.addEventListener('mousemove', updateVal));