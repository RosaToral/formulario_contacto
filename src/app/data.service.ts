import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from './contact.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  /*
    Método para hacer la petición al servidor usando HttpClient
    Parámetros: contact: Contact
    No regresa algún valor
  */
  saveContactWay(contact: Contact): void {
    //Se hace una petición post al servidor
    this.httpClient.post('https://beta.maxipublica.com/testing/leads/', contact).subscribe(
      res => {
        console.log(res);
        alert(JSON.stringify(res));
      },
      error => alert("hubo un error")
    );
  }

}
