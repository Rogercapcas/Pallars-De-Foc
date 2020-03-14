export class User {
  id: number;
  password: string;
  name: string;
  public surname: string;
  private superuser: boolean;
  public email: string;
  public phoneNumber: number;
  token?: any;

  constructor(
    id: number,
    name: string,
    surname: string,
    superuser: boolean,
    email: string,
    phoneNumber: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.superuser = superuser;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
