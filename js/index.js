// FUNCIONES PARA ABRIR LOS MODALES Y LIGTHBOX DE LA GALERIA
function openModal() {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('barramenu').style.zIndex='-1000';
  
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('barramenu').style.zIndex='1030';
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  //FUNCIONES PARA MOSTRAR Y ESCONDER ELEMENTOS EN LA PAGINA DE NIVELES
  
  function desplegarObj(){
  if ((document.getElementById("objetivos").style.display) == "none")
  {document.getElementById("objetivos").style.display = "block";
  document.getElementById("text-objetivos").innerHTML = "Objetivos -";}
  else
  {document.getElementById("objetivos").style.display = "none";
  document.getElementById("text-objetivos").innerHTML = "Objetivos +";}
  return;
  }
  
  function desplegarHor(){
  if ((document.getElementById("horarios").style.display) == "none")
  {document.getElementById("horarios").style.display = "block";
  document.getElementById("text-horarios").innerHTML = "Horarios -";}
  else
  {document.getElementById("horarios").style.display = "none";
  document.getElementById("text-horarios").innerHTML = "Horarios +";}
  return;
  }
  
  function desplegarUnif(){
  if ((document.getElementById("uniforme").style.display) == "none")
  {document.getElementById("uniforme").style.display = "block";
  document.getElementById("text-uniforme").innerHTML = "Uniforme -";}
  else
  {document.getElementById("uniforme").style.display = "none";
  document.getElementById("text-uniforme").innerHTML = "Uniforme +";}
  return;
  }
  
  function desplegarProg(){
  if ((document.getElementById("programas").style.display) == "none")
  {document.getElementById("programas").style.display = "block";
  document.getElementById("text-programas").innerHTML = "Programas -";}
  else
  {document.getElementById("programas").style.display = "none";
  document.getElementById("text-programas").innerHTML = "Programas +";}
  return;
  }
  
  function desplegarMat(){
  if ((document.getElementById("materiales").style.display) == "none")
  {document.getElementById("materiales").style.display = "block";
  document.getElementById("text-materiales").innerHTML = "Materiales -";}
  else
  {document.getElementById("materiales").style.display = "none";
  document.getElementById("text-materiales").innerHTML = "Materiales +";}
  return;
  }
  
  
  if(element.style.contenedor.hovered === true) {
  
  document.getElementsByClassName("textNiveles").style.display="none";
  
  }