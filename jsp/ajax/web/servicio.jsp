<%-- Definimos que la respuesta de este servicio será JSON codificado UTF-8 --%>
<%@page contentType="application/json" pageEncoding="UTF-8"%>

<%-- Utilizamos una clase para validar datos --%>
<jsp:useBean id="Validator" class="ajax.Validator"/>

<%
  // Utilizamos una variable para guardar la respuesta final del servicio, la cual
  // iniciamos con la llave que inicia el objeto.
  String respuesta = "{";

  // Tratamos de conseguir los datos de llegada.
  String num1Str = (String) request.getParameter("num1");
  String num2Str = (String) request.getParameter("num2");

  // Verificamos que los datos hayan llegado y no sean nulos.
  if (num1Str == null || num2Str == null) {
    respuesta += "\"ok\": false,";
    respuesta += "\"error\": \"No se recibieron todos los datos.\"";
  }

  // Verificamos que si llegaron los datos, sean numéricos.
  else if (!Validator.isNumeric(num1Str) || !Validator.isNumeric(num2Str)) {
    respuesta += "\"ok\": false,";
    respuesta += "\"error\": \"Los datos de llegada no son numéricos.\"";
  }

  // Si llegaron los datos bien, procesarlos y responder.
  else {
    double num1 = Double.parseDouble(num1Str);
    double num2 = Double.parseDouble(num2Str);
    double sum = num1 + num2;
    respuesta += "\"ok\": true, \"sum\": "+ sum;
  }

  // Cerramos el JSON de respuesta con la llave de cerrado.
  respuesta += "}";
  
  // Seteamos el tipo de contenido de respuesta y lo escribimos, el cual es el
  // JSON que tenemos en la variable "respuesta".
  response.setContentType("application/json;charset=UTF-8");
  out.print(respuesta);
%>
