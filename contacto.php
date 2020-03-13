<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Nivel Inicial - Escuela Taragui</title>

  <!-- CARGAR BOOTSTRAP CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 
  <!--  LINK PARA LAS LETRAS -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Playball" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Oswald:500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

    <!-- LINK PARA CARGAR LOS ESTILOS DE ESTA SECCION -->
    <link rel="stylesheet" href="css/contacto.css">

  <!-- LINK PARA CARGAR LOS ESTILOS Y LETRAS DE LA SECCION ACTIVIDADES -->
  <link rel="stylesheet" href="css/style-actividades.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">

</head>


<body id="page-top">
  <!-- CONTENIDO DEL NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-dark" id="nav-principal">
    <di v class="container">
      <a href="#page-top"><img class="img-fluid" src="img/Logo.png" alt="" width="50px" height="50px"></a>
      <a class="navbar-brand" href="index.html" id="titEscuela">Escuela Taragüi</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color: white;"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Inicio<span class="sr-only">(current)</span></a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Niveles
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="inicial.html">Nivel Inicial</a>
              <a class="dropdown-item" href="primario.html">Nivel Primario</a>
              <a class="dropdown-item" href="secundario.html">Nivel Secundario</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link" href="novedades.html">Novedades</a></li>
          <li class="nav-item active"><a class="nav-link" href="contacto.html">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>


  <!-- CONTENIDO DE LA PAGINA PRINCIPAL - CONTACTO -->
  <div class="container contenido-principal">    
    <ol class="breadcrumb"> <!-- "breadcrumb" es una clase de boopstrap para indicar en que pagina se encuentra -->
      <li class="breadcrumb-item">
        <a href="index.html">Inicio</a>
      </li>
      <li class="breadcrumb-item active">Contacto</li>
    </ol>


    <div class="row">
      <div class="col-lg-8 mb-4"> <!--EN ESTE DIV PARA EL MAPA -->
        <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.812480050881!2d-58.84735978918076!3d-27.472221523872815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456cbb41360fbd%3A0x8a638a6245394af9!2sEscuela+Privada+Taragui!5e0!3m2!1sen!2sar!4v1552491595123"></iframe> 
      </div>
      
      <div class="col-lg-4 mb-4"> <!-- Aca va la info de contacto  -->
        <h3>Encontranos en:</h3>
        <p>Corrientes Capital, Argentina
          <br>
          Hipolito Yrigoyen 967
          <br>
        </p>
        <p>
          <abbr title="Phone">Telefono</abbr>: (03794) 4444444
        </p>
        <p>
          <abbr title="Email">Email</abbr>:
          <a href="mailto:name@example.com">escuelataragui@hotmail.com
          </a>
        </p>
        <p>
          <abbr title="Hours">Horarios</abbr>: Lunes - Viernes: 8:00 AM hasta 13:00 PM
        </p>
      </div>
    </div>
    
    <div class="row"> <!-- ESTE DIV LE CORRESPONDE A LA PARTE DEL FORMULARIO-->
      <div class="col-lg-8 mb-4">
        <h3>Envíanos un mensaje</h3>
        <p>Puedes completar el siguiente formulario para comunicarte con nosotros. Nos contactaremos en breve.</p>
        <form class="contact-form" action="contactoForm.php" method="POST">
          <div class="control-group form-group">
            <div class="controls">
              <label>Nombre y Apellido:</label>
              <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
              <p class="help-block"></p>
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Telefono:</label>
              <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Email:</label>
              <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Mensaje:</label>
              <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
            </div>
          </div>
          <div id="success"></div>
          <!-- For success/fail messages -->
          <button type="submit" class="btn btn-primary" id="botonEnviar">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </div>

   
  <!-- FOOTER -->
  <footer class="bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; www.escuelataragui.com 2019</p>
    </div>
  </footer>
  

  <!-- AGREGAMOS LOS LINKS PARA CARGAR BOOSTRAP-->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  <!-- AGREGAMOS LAS FUNCIONES DE JS -->
  <script src="js/index.js"></script>
</body>
</html>