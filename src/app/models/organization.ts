export class Organization {
  NIF: string;
  name: string;
  postalCode: string;
  addressStreet: string;
  numKm: number;
  stair?: string;
  floor: number;
  door?: string;

  constructor(NIF: string, name: string, postalCode: string, addressStreet: string, numKm: number, stair: string, floor: number, door: string) {
    this.NIF = NIF;
    this.name = name;
    this.postalCode = postalCode;
    this.addressStreet = addressStreet;
    this.numKm = numKm;
    this.stair = stair;
    this.floor = floor;
    this.door = door;
  }
}
