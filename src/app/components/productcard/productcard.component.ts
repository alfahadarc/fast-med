import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent implements OnInit {
  @Input() productItem: Product;

  constructor() {}

  ngOnInit(): void {
    console.log(this.productItem);
  }
}
