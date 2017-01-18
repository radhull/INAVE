import { tareaservice } from "./tareaservice";
import * as $ from "jquery";

$(document).ready(() => {
    let tarserv = new tareaservice();
    $("#boton").click(function(){
        
        tarserv.addTarea($("#caja").val());
        $("#saludos").empty();
        
        tarserv.getTareas().forEach((tarea)=>{
            $("#saludos").append("<div>" + tarea + "</div>");
        } );
    });

    
});


