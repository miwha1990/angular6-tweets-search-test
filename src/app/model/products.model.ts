export class ProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;

  constructor(id: number = 0,
              title: string = '',
              description: string = '',
              price: number = 0,
              image: string = '') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
