window.onload = function() {
    alert("Bem-vindo ao meu site!");
  };
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "#e74c3c"; 
  }
  
  document.getElementById("myButton").onclick = changeBackgroundColor;
  