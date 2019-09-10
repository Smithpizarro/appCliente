import {  Persona } from "./persona";
import { Paginacion } from "./paginacion";

export class PersonaCollection{
    public listaPersona:Persona[];
    public paginacion:Paginacion;
    constructor(){
        this.paginacion = new Paginacion;
    }
    }