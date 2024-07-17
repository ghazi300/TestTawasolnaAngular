export class Participant {
  id?: number; // Add id property
  name: string;
  attended: boolean;
  age: number;
  email: string;
  phone: string;
  address: string;
  specialNeeds: string;

  constructor(
    name: string,
    attended: boolean,
    age: number,
    email: string,
    phone: string,
    address: string,
    specialNeeds: string
  ) {
    this.name = name;
    this.attended = attended;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.specialNeeds = specialNeeds;
  }
}
