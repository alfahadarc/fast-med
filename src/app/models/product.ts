export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  boxsize: number;

  constructor(id, name, description = '', price = 0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
