import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { ServicioService } from './servicio.service';
import { PersonaCollection } from '../model/personaCollection';
import { Paginacion } from '../model/paginacion';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from '../model/persona';
import { ClienteCollection } from '../model/clienteCollection';
import { Cliente } from '../model/cliente';


@Component({
  selector: 'nueva-persona',
  templateUrl: './nueva-persona.html',
})
export class NuevaPersona {
 
  public persona: Persona = new Persona;
  public cliente: Cliente = new Cliente;
  public errorMessage: String;
  @Output() listapersonaOut = new EventEmitter<PersonaCollection>();
  public personacollection : PersonaCollection= new PersonaCollection();
  public clientecollection : ClienteCollection= new ClienteCollection();
  constructor(public activeModal: NgbActiveModal, public modal: NgbActiveModal, private service: ServicioService) {
    console.log("llega abonado?");
  }
 
  /*public agregarPersona(name: string ,height : number ,mass : number ,hairColor : string ,planet: string,gender: string){
   this.persona.name = name;
   this.persona.height = height;
   this.persona.mass = mass;
   this.persona.hairColor = hairColor;
   this.persona.planet = planet;
   this.persona.gender = gender;
   
   this.service.crearPersona(this.persona).subscribe( persona=>{
         this.service.getPaginaPersonas(1).subscribe(
          personacollection=>{
          //  this.personacollection=personacollection;
          },
         );
         this.listapersonaOut.emit(this.personacollection);
    },
    error=>{this.errorMessage=<any>error;} );
      
    this.activeModal.close(this.personacollection);
  }*/

  public agregarPersona(nombre: string ,apellido : string ,edad : number ,fechaNacimiento : string ,edadMuerte: number){
    this.cliente.nombre = nombre;
    this.cliente.apellido = apellido;
    this.cliente.edad = edad;
    this.cliente.fecha_nacimiento = fechaNacimiento;
    this.cliente.edad_muerte = edadMuerte;
;
    
    this.service.crearPersona(this.cliente).subscribe( cliente=>{
          this.service.getPaginaPersonas(1).subscribe(
            clientecollection=>{
             this.clientecollection=clientecollection;
           },
          );
          this.listapersonaOut.emit(this.personacollection);
     },
     error=>{this.errorMessage=<any>error;} );
       
     this.activeModal.close(this.clientecollection);
   }
}


@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css'],
  providers: [ServicioService]   
})
export class EstructuraComponent implements OnInit {

  //ublic personacollection : PersonaCollection= new PersonaCollection();
  public clientecollection : ClienteCollection= new ClienteCollection();
  public pages = 1;
  private errorMessage: String;

  constructor(private service: ServicioService, private modalService: NgbModal ) {

    this.clientecollection.paginacion = new Paginacion;
   }

  ngOnInit() {
    this.getPersona(this.pages);
  }
  
  loadPage(page: number) {
    
    if (page !== this.pages) {
      this.pages = page;
     
    }
  // console.log("pagina -> "+this.pages+ " categoria "+idCategoria );
   this.getPersona(this.pages);
  }

  public getPersona(pagina:number){
    this.service.getPaginaPersonas(pagina).subscribe(
      clientecollection=>{
    console.log(clientecollection);
    this.clientecollection=clientecollection;

    },
    error=>{this.errorMessage=<any>error;}
    );
    }

   public added(){

    const modalRef = this.modalService.open(NuevaPersona, { centered: true });
      modalRef.result.then((result) => {
     console.log("llego? " +result);
   //  this.personacollection = result;
     this.getPersona(1);
    }).catch((error) => {
      console.log(error);
    });
   } 


   public delete(idPersona:number){

    this.service.deletePersona(idPersona).subscribe(
      transaccion=>{
      console.log(transaccion);
      this.getPersona(1);
      },
      error=>{this.errorMessage=<any>error;
      }
      );
    }
}
