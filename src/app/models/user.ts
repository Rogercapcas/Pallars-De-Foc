export class User {
  id: number;
  password: string;
  name: string;
  public surname: string;
  public superuser: boolean;
  public email: string;
  public phoneNumber: number;
  token?: any;

  constructor(
    id: number,
    password: string,
    name: string,
    surname: string,
    superuser: boolean,
    email: string,
    phoneNumber: number,
    token: any) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.superuser = superuser;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.token = token;
  }
}
