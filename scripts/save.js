var saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', saveImg);

function saveImg() {
  var data = canvas.toDataURL();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      var res = xhr.responseText;
      window.open(data, '_blank', 'location=0, menubar=0');
    }
  }
  xhr.open('POST', 'save.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send('img='+data);
}
