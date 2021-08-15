import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DetailsProductsService } from '../../services/details-products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(private detailProduct: DetailsProductsService) {}

  ngOnInit(): void {
    this.product = this.detailProduct.getProduct();
  }
}
