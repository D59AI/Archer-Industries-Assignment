  function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('content').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', page, true);
    xhttp.send();
  }
  
  function openContactPanel() {
    document.getElementById('contactPanel').style.display = 'block';
  }
  
  function closeContactPanel() {
    document.getElementById('contactPanel').style.display = 'none';
  }
    