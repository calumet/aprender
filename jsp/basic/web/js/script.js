

$(document).on("ready", function() {


    $('#enviar').on('click',function(){

        // validaciones 
        if($('#busqueda').val().match(/\w/)){
            document.datos.bandera.value=1;
            document.datos.submit();
 			
        }else{
            alert("Debe escribir un criterio de busqeuda");
            $('#busqueda').focus();
        }

    });



});
