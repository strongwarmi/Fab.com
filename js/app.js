$(document).foundation()
var ocultar = document.getElementsByClassName("ocultar");

document.getElementById("checkout").addEventListener("click" , function(e){
  e.preventDefault();
  for(i=0; i<ocultar.length; i++){
    ocultar[i].style.display="none";
  }
  document.getElementById("payment").style.display="block";
});
document.getElementById("cerrar").addEventListener("click", function(e){
  e.preventDefault();
  for(i=0; i<ocultar.length; i++){
    ocultar[i].style.display="block";
  }
  document.getElementById("payment").style.display="none";
});
