import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

import { DetailsProductsService } from '../../services/details-products.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent implements OnInit {
  @Input() productItem: Product;

  constructor(
    private router: Router,
    private detailProduct: DetailsProductsService
  ) {}

  ngOnInit(): void {}
  onSelect(product: Product): void {
    this.detailProduct.setProduct(product);
    this.router.navigateByUrl('/products');
  }
}
