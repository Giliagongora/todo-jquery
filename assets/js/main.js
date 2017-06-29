
 $(document).ready(function() {

 	    $("#clave").keypress(function(e) {
       if(e.which == 13) {
          // Acciones a realizar, por ej: enviar formulario.
          $('##doing').text("hola");
       }
    });
  		
  });

