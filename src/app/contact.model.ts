//Modelo para dar formato a la información de contacto que se recibe
export class Contact {
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  message: string = "";

  constructor (name:string, email:string, phoneNumber:string, message:string) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
  }
}