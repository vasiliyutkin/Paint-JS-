var colors = ['#b000b5', '#bada55', '#c55', '#101', '#10aded', '#7a2d15', '#fa7a55', '#10073d', '#505', '#a27157', '#fab135'];

var swatches = document.getElementsByClassName('swatch');

for(var i = 0, ii = colors.length; i < ii; i++) {
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if(active) {
    active.className = "swatch";
  }
}

function setSwatch(e) {
  var swatch = e.target;
  setColor(swatch.style.backgroundColor);
  swatch.className += ' active';
};

setSwatch({
  target: document.getElementsByClassName('swatch')[0]
});
