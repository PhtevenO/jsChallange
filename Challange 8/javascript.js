const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = true;

canvas.height = window.innerHeight;
canvas.width  =window.innerWidth;

ctx.strokeStyle = '#fF5846';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

function draw(e){
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
   ctx.lineTo(e.offsetX, e.offsetY); 
   ctx.stroke();
   [lastX, lastY] = [e.offsetX, e.offsetY];
   hue++;

   if (ctx.lineWidth >= 60 || ctx.lineWidth <= 1){
       lineWidth = !lineWidth;
   }
   if (lineWidth){
    ctx.lineWidth++;
} else {
    ctx.lineWidth--;
}
   
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
