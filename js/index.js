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
  

function desplegarProg(){
    if ((document.getElementById("programas").style.visibility) == "none")
    {document.getElementById("programas").style.display = "block";
    document.getElementById("text-programas").innerHTML = "Programas -";
    }
    else
    {document.getElementById("programas").style.display = "none";
    document.getElementById("text-programas").innerHTML = "Programas +";
    //document.getElementById("div-primero").style.backgroundColor = "#1E3EB8";
    }
    return;
}

  function desplegarPrimer(){
  if ((document.getElementById("archivos-primer").style.visibility) == "none")
  {document.getElementById("archivos-primer").style.display = "block";
  document.getElementById("text-Primer").innerHTML = "Primer Año -";
  //document.getElementById("div-primero").style.backgroundColor = "rgb(11, 23, 68)";
  }
  else
  {document.getElementById("archivos-primer").style.display = "none";
  document.getElementById("text-Primer").innerHTML = "Primer Año +";
  //document.getElementById("div-primero").style.backgroundColor = "#1E3EB8";
  }
  return;
  }
  
  function desplegarSegundo(){
  if ((document.getElementById("archivos-segundo").style.display) == "none")
  {document.getElementById("archivos-segundo").style.display = "block";
  document.getElementById("text-segundo").innerHTML = "Segundo Año -";
  //document.getElementById("div-segundo").style.backgroundColor = "rgb(11, 23, 68)";
  }
  else
  {document.getElementById("archivos-segundo").style.display = "none";
  document.getElementById("text-segundo").innerHTML = "Segundo Año +";
  //document.getElementById("div-segundo").style.backgroundColor = "#1E3EB8";
  }
  return;
  }

  function desplegarTercero(){
    if ((document.getElementById("archivos-tercero").style.display) == "none")
    {document.getElementById("archivos-tercero").style.display = "block";
    document.getElementById("text-tercero").innerHTML = "Tercer Año -";
    //document.getElementById("div-tercero").style.backgroundColor = "rgb(11, 23, 68)";
    }
    else
    {document.getElementById("archivos-tercero").style.display = "none";
    document.getElementById("text-tercero").innerHTML = "Tercer Año +";
    //document.getElementById("div-tercero").style.backgroundColor = "#1E3EB8";
    }
    return;
  }

  function desplegarCuarto(){
    if ((document.getElementById("archivos-cuarto").style.display) == "none")
    {document.getElementById("archivos-cuarto").style.display = "block";
    document.getElementById("text-cuarto").innerHTML = "Cuarto Año -";
    //document.getElementById("div-cuarto").style.backgroundColor = "rgb(11, 23, 68)";
    }
    else
    {document.getElementById("archivos-cuarto").style.display = "none";
    document.getElementById("text-cuarto").innerHTML = "Cuarto Año +";
    //document.getElementById("div-cuarto").style.backgroundColor = "#1E3EB8";
    }
    return;
    }

  function desplegarQuinto(){
      if ((document.getElementById("archivos-quinto").style.display) == "none")
      {document.getElementById("archivos-quinto").style.display = "block";
      document.getElementById("text-quinto").innerHTML = "Quinto Año -";
      //document.getElementById("div-quinto").style.backgroundColor = "rgb(11, 23, 68)";
      }
      else
      {document.getElementById("archivos-quinto").style.display = "none";
      document.getElementById("text-quinto").innerHTML = "Quinto Año +";
      //document.getElementById("div-quinto").style.backgroundColor = "#1E3EB8";
      }
      return;
  }

  function desplegarSexto(){
    if ((document.getElementById("archivos-sexto").style.display) == "none")
    {document.getElementById("archivos-sexto").style.display = "block";
    document.getElementById("text-sexto").innerHTML = "Sexto Año -";
    //document.getElementById("div-sexto").style.backgroundColor = "rgb(11, 23, 68)";
    }
    else
    {document.getElementById("archivos-sexto").style.display = "none";
    document.getElementById("text-sexto").innerHTML = "Sexto Año +";
    //document.getElementById("div-sexto").style.backgroundColor = "#1E3EB8";
    }
    return;
  }

  
  
 
  
  
  if(element.style.contenedor.hovered === true) {
  
  document.getElementsByClassName("textNiveles").style.display="none";
  
  }