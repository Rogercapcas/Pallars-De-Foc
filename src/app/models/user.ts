export class User {
  id: number;
  password: string;
  name: string;
  public surname: string;
  public superuser: boolean;
  public email: string;
  public phoneNumber: number;
  token?: any;

  constructor() {}
}
