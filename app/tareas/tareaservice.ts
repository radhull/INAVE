import { log } from "../libreria/logger";

export class tareaservice{
    ListaTareas : string[]=[];
    l = log;

    constructor(){
        this.l("Inicio");
    }

    addTarea(texto:string){
        this.l("Añado tarea texto");
        this.ListaTareas.push(texto);
        this.l("termino Añadir tarea");
    }

    getTareas():string[]{
        this.l("Devuelvo tareas");
        return this.ListaTareas;
    }
}