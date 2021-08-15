import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class DetailsProductsService {
  product: Product;
  constructor() {}

  setProduct(data) {
    this.product = data;
  }

  getProduct() {
    return this.product;
  }
}
