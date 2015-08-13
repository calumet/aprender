<%-- 
    Document   : ejemplo3
    Created on : 22/08/2013, 10:40:48 AM
    Author     : Duvan Jamid
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="java.sql.*"%>

<jsp:useBean id="Registro" class="beans.Registro" scope="page"/>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JSP | Ejemplo 4</title>
        <link rel="stylesheet" href="http://cormoran.uis.edu.co/eisi/css/Estandar/Elise/Elise.css">
        <link rel="stylesheet" href="/css/estilo.css">
        <style>
            body {
                background-color: #f2f2f2;
                color: #656565;
            }
            .contenido {
                margin: 0 auto;
                float: none;
                width: 700px;
                padding: 20px;
                background-color: #fff;
            }
        </style>
    </head>
    <body>

        <div class="contenido" >
            <h2 class="titulo">Buscador</h2>
            <form name="datos" method="get">
                <div class="row-fluid">
                    <div class="span2" >
                        <h4 style="float: right"> Busqueda</h4>
                    </div>
                    <div class="span10" >
                        <div class="comboCaja" >
                            <input type="text" name="busqueda" id="busqueda" class="input-supergrande left icon icon_q7 " value="" placeholder="criterio de busqueda">
                            <button type="button" name="enviar" class="azul right boton" id="enviar" >
                                <span class="label">Buscar</span>
                            </button>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="bandera" value="0"/>
            </form>

            <%
                if (request.getParameter("bandera") != null && request.getParameter("bandera").equals("1")) {

                    String busqueda = request.getParameter("busqueda");

                    ResultSet datosUsuario = Registro.buscarUsusario(busqueda);
                    if (datosUsuario != null) {
            %>
            <hr>
            <table class="table table-striped table-striped-top" style="width: 100%">
                <thead> 
                    <tr>
                        <th colspan="4"> Resultados de Busqueda</th>
                    </tr>
                    <tr>
                        <th>No.</th>
                        <th>Nombrev</th>
                        ghjghjghjg
                        <th>Identificación</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                        while (datosUsuario.next()) {
                    %>
                    <tr >
                        <td><%=datosUsuario.getRow()%></td>
                        <td><%=datosUsuario.getString("NombreCompleto")%></td>
                        <td><%=datosUsuario.getString(2)%></td>
                        <td><%=datosUsuario.getString(3)%></td> 
                    </tr>
                    <%
                                }

                            }
                        }
                    %>
                </tbody>
            </table>
        </div>

        <script src="/js/jquery-2.1.4.min.js"></script>
        <script src="/js/script.js"></script>
    </div>
</body>
</html>
