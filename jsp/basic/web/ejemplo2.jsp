<%-- 
    Document   : ejemplo2
    Created on : 22/08/2013, 10:40:48 AM
    Author     : Duvan Jamid
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<jsp:useBean id="Registro" class="beans.Registro" scope="page"/>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JSP | Ejemplo 2</title>
        <link rel="stylesheet" href="/css/estilo.css">
    </head>
    <body>

        <div class="contenido">
            <h2 class="titulo">Formularios</h2>
            <form name="datos">
                <div class="linea">
                    <label> Nombre<input type="text" name="nombre" id="nombre" value=""></label>
                </div>
                <div class="linea">
                    <label> Apellido<input type="text" name="apellido" id="apellido" value=""></label>
                </div>
                <div class="linea">
                    <label> Genero
                        <select name="genero" id="genero" >
                            <option value="">-- Seleccione --</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                </div>
                <div class="linea">
                    <label> Tipo Identificacion
                        <select name="tipoident" id="tipoident" >
                            <option value="">-- Seleccione --</option>
                            <option value="CC">CC</option>
                            <option value="TI">TI</option>
                        </select>
                </div>
                <div class="linea">
                    <label> Numero de Identificación<input type="text" name="noident" id="noident" value=""></label>
                </div>
                <div class="linea">
                    <label> Correo<input type="text" name="correo" id="correo" value=""></label>
                </div>
                <div class="linea">
                    <button type="submit" id="enviar1">Enviar</button>
                    <button type="reset" >Limpiar</button>
                </div>
            </form>
        </div>
        <div class="contenido" id="lista"  >
            <h3>Usuario Anterior</h3>
            <%
                if (request.getParameter("nombre") != null) {
                    
                    String Nombre=request.getParameter("nombre");
                    String Apellido=request.getParameter("apellido");
                    String NoIdent=request.getParameter("noident");
                    String TipoIdent=request.getParameter("tipoident");
                    String Genero=request.getParameter("genero");
                    String Correo=request.getParameter("correo");
                    
                    if(Registro.guardarUsuario_2(Nombre, Apellido, NoIdent, TipoIdent, Genero, Correo) ){
                    %>
                    <table>
                        <tr>
                            <td><%=Nombre%></td>
                            <td><%=Apellido%></td>
                            <td><%=NoIdent%></td>
                            <td><%=TipoIdent%></td>
                            <td><%=Genero%></td>
                            <td><%=Correo%></td>
                        </tr>
                    </table>
                    
                    <%
                    }else{
                        %>
                        <p>no se ha guardado el usuario </p>
                        <script>
                            alert("Error No se ha guardado el usuario");
                        </script>
                            
                        
                        <%
                    }
                }
            %>
        </div>

        <script src="/js/jquery-2.1.4.min.js"></script>
        <script src="/js/script.js"></script>
    </body>
</html>
