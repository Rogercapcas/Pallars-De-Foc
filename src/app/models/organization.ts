export class Organization {
  NIF: string;
  name: string;
  city: string;
  country: string;
  postalCode: string;
  addressStreet: string;
  numKm: number;
  stair?: string;
  floor: number;
  door?: string;
  contactName: string;
  contactPhone: number;
  mainEmail: string;

  constructor(
    NIF: string,
    name: string,
    city: string,
    country: string,
    postalCode: string,
    addressStreet: string,
    numKm: number,
    contactName: string,
    contactPhone: number,
    mainEmail: string,
    stair?: string,
    floor?: number,
    door?: string
  ) {
    this.NIF = NIF;
    this.name = name;
    this.city = city;
    this.country = country;
    this.postalCode = postalCode;
    this.addressStreet = addressStreet;
    this.numKm = numKm;
    this.stair = stair;
    this.floor = floor;
    this.door = door;
    this.contactName = contactName;
    this.contactPhone = contactPhone;
    this.mainEmail = mainEmail;
  }
}
