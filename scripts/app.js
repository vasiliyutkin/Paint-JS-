var canvas = document.getElementById('c');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function() {
  var image = context.getImageData(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.putImageData(image, 0, 0);
}

var radius = 10,
    dragging = false;

context.lineWidth = radius * 1.5;

function putPoint(e) {
  if(dragging) {
    canvas.style.cursor = 'crosshair';
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
  if(!dragging) {
    canvas.style.cursor = 'default';
  }
}

function engage() {
  dragging = true;
}

function disengage() {
  dragging = false;
  context.beginPath();
}

canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
