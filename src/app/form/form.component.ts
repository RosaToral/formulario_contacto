import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name:string = "";
  email:string = "";
  phoneNumber:string = "";
  message:string = "";
  accepted:boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  /*
    Método para validar que los campos del formulario estén llenos o que sigan el formato correcto
    No recibe parámetros
    No regresa algún valor
  */
  validateFormat(): void {
    //Se obtiene el formulario 
    const form = (<HTMLFormElement>document.getElementById('formulario'));

    //Se valida que los campos estén llenos y que tengan la información adecuada
    if ((form).checkValidity()) this.sendInfo();

    //Clase de bootstrap para mostrar los campos que estén bien o mal
    form.classList.add('was-validated');
  }

  /*
    Método para hacer la petición al servidor a través del servicio DataService
    No recibe parámetros
    No regresa algún valor
  */
  sendInfo(): void {
    const contact = new Contact(this.name, this.email, this.phoneNumber, this.message);

    this.dataService.saveContactWay(contact);
  }

}
