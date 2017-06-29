var $input = $('input');


$(document).ready(function() {


 	    $('$input').keypress(function(e) {
       if(e.which == 13) {
           //$('#listaTareas').html(localStorage.getItem('listaTareas'));
           var message = $('#sumaTareas').val();
           if( $input.val() == ""){
           	alert("Debes escribir")
           }else{
           	$('.work').append(message);
           }
       }
    });
  		
  });


/*
$("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
});
*/