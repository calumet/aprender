// scripts

(function () {

  var $num1 = $('#num1');
  var $num2 = $('#num2');

  var log = function (type, msg) {
    $('#result').html('<b class="'+ type +'">'+ msg +'</b>');
  };

  $('#sum').on('click', function (e) {

    // Validar que el usuario haya ingresado números válidos.
    if (!$.isNumeric($num1.val())) {
      log('warning', 'Debes ingresar un número válido en el primer campo.');
      $num1.trigger('focus');
      return;
    }
    if (!$.isNumeric($num2.val())) {
      log('warning', 'Debes ingresar un número válido en el segundo campo.');
      $num2.trigger('focus');
      return;
    }

    // Realizar la petición.
    $.ajax({

      // La URL del servicio que atenderá la petición.
      url: '/ajax/servicio.jsp',

      // Por defecto se envía por método GET.
      //type: 'GET',

      // Los parámetros que se envían.
      data: {
        num1: $num1.val(),
        num2: $num2.val()
      },

      // Si al finalizar la petición se procesó correctamente.
      // Se espera un resultado JSON, por lo tanto "result" se trata como objeto.
      success: function (result, textStatus, jqXHR) {

        // Si explicitamente el servicio que atendió la petición respondió como se esperaba.
        // NOTE: Esto es definido por el programador. En este caso esperamos que servicio
        // devuelva la propiedad "ok" con un boleano indicando si fue correcto o no.
        if (result.ok) {

          // Se espera la propiedad "sum" con el resultado de la suma si el procedimiento
          // fue correcto.
          log('success', 'El resultado es: '+ result.sum);
        } else {
          log('error', 'Ocurrió un error al realizar la suma. Intenta de nuevo.');
        }
      },

      // Si hubo un error al procesar la petición.
      // Se reciben parámetros con datos del error. En este caso no se revisan.
      // Ej. de errores: HTTP 500, respuesta JSON inválida...
      error: function (jqXHR, textStatus, errorThrown) {
        log('error', 'Ocurrió un error al procesar la petición AJAX. Intenta de nuevo.');
      }
    });
  });

})();
