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
  
 function desplegarPrimero(){
  if ((document.getElementById("objetivos").style.display) == "none")
  {document.getElementById("objetivos").style.display = "block";
  document.getElementById("text-objetivos").innerHTML = "Objetivos -";}
  else
  {document.getElementById("objetivos").style.display = "none";
  document.getElementById("text-objetivos").innerHTML = "Objetivos +";}
  return;
  }

  function desplegarPrimer(){
    if ((document.getElementById("archivos-primer").style.display) == "none")
    {document.getElementById("archivos-primer").style.display = "block";
    document.getElementById("text-Primer").innerHTML = "Primer Ano -";}
    else
    {document.getElementById("archivos-primer").style.display = "none";
    document.getElementById("text-Primer").innerHTML = "Primer Ano +";}
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
  
  function desplegarFuncion(){
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

 //FUNCIONES PARA MOSTRAR Y ESCONDER ELEMENTOS EN LA PAGINA DE NIVELES SECUNDARIO
function desplegarPrimer(){
if ((document.getElementById("archivos-primer").style.display) == "none")
{document.getElementById("archivos-primer").style.display = "block";
document.getElementById("div-primero").style.backgroundColor = "rgb(13, 28, 88)";
document.getElementById("text-Primer").innerHTML = "Primer Año -";
//document.getElementById("div-primero").style.backgroundColor = "rgb(11, 23, 68)";
}
else
{document.getElementById("archivos-primer").style.display = "none";
document.getElementById("div-primero").style.backgroundColor = "#1E3EB8";
document.getElementById("text-Primer").innerHTML = "Primer Año +";
//document.getElementById("div-primero").style.backgroundColor = "#1E3EB8";
}
return;
}

function desplegarSegundo(){
if ((document.getElementById("archivos-segundo").style.display) == "none")
{document.getElementById("archivos-segundo").style.display = "block";
document.getElementById("div-segundo").style.backgroundColor = "rgb(13, 28, 88)";
document.getElementById("text-segundo").innerHTML = "Segundo Año -";
//document.getElementById("div-segundo").style.backgroundColor = "rgb(11, 23, 68)";
}
else
{document.getElementById("archivos-segundo").style.display = "none";
document.getElementById("div-segundo").style.backgroundColor = "#1E3EB8";
document.getElementById("text-segundo").innerHTML = "Segundo Año +";
//document.getElementById("div-segundo").style.backgroundColor = "#1E3EB8";
}
return;
}

function desplegarTercero(){
  if ((document.getElementById("archivos-tercero").style.display) == "none")
  {document.getElementById("archivos-tercero").style.display = "block";
  document.getElementById("div-tercero").style.backgroundColor = "rgb(13, 28, 88)";
  document.getElementById("text-tercero").innerHTML = "Tercer Año -";
  //document.getElementById("div-tercero").style.backgroundColor = "rgb(11, 23, 68)";
  }
  else
  {document.getElementById("archivos-tercero").style.display = "none";
  document.getElementById("div-tercero").style.backgroundColor = "#1E3EB8";
  document.getElementById("text-tercero").innerHTML = "Tercer Año +";
  //document.getElementById("div-tercero").style.backgroundColor = "#1E3EB8";
  }
  return;
}

function desplegarCuarto(){
  if ((document.getElementById("archivos-cuarto").style.display) == "none")
  {document.getElementById("archivos-cuarto").style.display = "block";
  document.getElementById("div-cuarto").style.backgroundColor = "rgb(13, 28, 88)";
  document.getElementById("text-cuarto").innerHTML = "Cuarto Año -";
  //document.getElementById("div-cuarto").style.backgroundColor = "rgb(11, 23, 68)";
  }
  else
  {document.getElementById("archivos-cuarto").style.display = "none";
  document.getElementById("div-cuarto").style.backgroundColor = "#1E3EB8";
  document.getElementById("text-cuarto").innerHTML = "Cuarto Año +";
  //document.getElementById("div-cuarto").style.backgroundColor = "#1E3EB8";
  }
  return;
  }

function desplegarQuinto(){
    if ((document.getElementById("archivos-quinto").style.display) == "none")
    {document.getElementById("archivos-quinto").style.display = "block";
    document.getElementById("div-quinto").style.backgroundColor = "rgb(13, 28, 88)";
    document.getElementById("text-quinto").innerHTML = "Quinto Año -";
    //document.getElementById("div-quinto").style.backgroundColor = "rgb(11, 23, 68)";
    }
    else
    {document.getElementById("archivos-quinto").style.display = "none";
    document.getElementById("div-quinto").style.backgroundColor = "#1E3EB8";
    document.getElementById("text-quinto").innerHTML = "Quinto Año +";
    //document.getElementById("div-quinto").style.backgroundColor = "#1E3EB8";
    }
    return;
}

function desplegarSexto(){
  if ((document.getElementById("archivos-sexto").style.display) == "none")
  {document.getElementById("archivos-sexto").style.display = "block";
  document.getElementById("div-sexto").style.backgroundColor = "rgb(13, 28, 88)";
  document.getElementById("text-sexto").innerHTML = "Sexto Año -";
  //document.getElementById("div-sexto").style.backgroundColor = "rgb(11, 23, 68)";
  }
  else
  {document.getElementById("archivos-sexto").style.display = "none";
  document.getElementById("div-sexto").style.backgroundColor = "#1E3EB8";
  document.getElementById("text-sexto").innerHTML = "Sexto Año +";
  //document.getElementById("div-sexto").style.backgroundColor = "#1E3EB8";
  }
  return;
}

 //FUNCIONES PARA MOSTRAR Y ESCONDER ELEMENTOS EN LA PAGINA DE NIVELES PRIMARIO
 function desplegarPrimerGrado(){
  if ((document.getElementById("archivos-primerGrado").style.display) == "none")
  {document.getElementById("archivos-primerGrado").style.display = "block";
  document.getElementById("div-primerGrado").style.backgroundColor = "rgb(13, 28, 88)";
  document.getElementById("text-primerGrado").innerHTML = "Primer Grado -";
  }
  else
  {document.getElementById("archivos-primerGrado").style.display = "none";
  document.getElementById("div-primerGrado").style.backgroundColor = "#1E3EB8";
  document.getElementById("text-primerGrado").innerHTML = "Primer Grado +";
  }
  return;
  }

  function desplegarSegundoGrado(){
    if ((document.getElementById("archivos-segundoGrado").style.display) == "none")
    {document.getElementById("archivos-segundoGrado").style.display = "block";
    document.getElementById("div-segundoGrado").style.backgroundColor = "rgb(13, 28, 88)";
    document.getElementById("text-segundoGrado").innerHTML = "Segundo Grado -";
    }
    else
    {document.getElementById("archivos-segundoGrado").style.display = "none";
    document.getElementById("div-segundoGrado").style.backgroundColor = "#1E3EB8";
    document.getElementById("text-segundoGrado").innerHTML = "Segundo Grado +";
    }
    return;
    }

function desplegarTercerGrado(){
    if ((document.getElementById("archivos-tercerGrado").style.display) == "none")
    {document.getElementById("archivos-tercerGrado").style.display = "block";
    document.getElementById("div-tercerGrado").style.backgroundColor = "rgb(13, 28, 88)";
    document.getElementById("text-tercerGrado").innerHTML = "Tercer Grado -";
    }
    else
    {document.getElementById("archivos-tercerGrado").style.display = "none";
    document.getElementById("div-tercerGrado").style.backgroundColor = "#1E3EB8";
    document.getElementById("text-tercerGrado").innerHTML = "Tercer Grado +";
    }
    return;
    }

function desplegarCuartoGrado(){
    if ((document.getElementById("archivos-cuartoGrado").style.display) == "none")
    {document.getElementById("archivos-cuartoGrado").style.display = "block";
    document.getElementById("div-cuartoGrado").style.backgroundColor = "rgb(13, 28, 88)";
    document.getElementById("text-cuartoGrado").innerHTML = "Cuarto Grado -";
    }
    else
    {document.getElementById("archivos-cuartoGrado").style.display = "none";
    document.getElementById("div-cuartoGrado").style.backgroundColor = "#1E3EB8";
    document.getElementById("text-cuartoGrado").innerHTML = "Cuarto Grado +";
    }
    return;
    }

function desplegarQuintoGrado(){
    if ((document.getElementById("archivos-quintoGrado").style.display) == "none")
    {document.getElementById("archivos-quintoGrado").style.display = "block";
    document.getElementById("div-quintoGrado").style.backgroundColor = "rgb(13, 28, 88)";
    document.getElementById("text-quintoGrado").innerHTML = "Quinto Grado -";
    }
    else
    {document.getElementById("archivos-quintoGrado").style.display = "none";
    document.getElementById("div-quintoGrado").style.backgroundColor = "#1E3EB8";
    document.getElementById("text-quintoGrado").innerHTML = "Quinto Grado +";
    }
    return;
    }

function desplegarSextoGrado(){
    if ((document.getElementById("archivos-sextoGrado").style.display) == "none")
    {document.getElementById("archivos-sextoGrado").style.display = "block";
    document.getElementById("div-sextoGrado").style.backgroundColor = "rgb(13, 28, 88)";
    document.getElementById("text-sextoGrado").innerHTML = "Sexto Grado -";
    }
    else
    {document.getElementById("archivos-sextoGrado").style.display = "none";
    document.getElementById("div-sextoGrado").style.backgroundColor = "#1E3EB8";
    document.getElementById("text-sextoGrado").innerHTML = "Sexto Grado +";
    }
    return;
    }