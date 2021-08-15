import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productData;
  productList: Product[];

  constructor(private store: FirebaseService) {}

  ngOnInit(): void {
    this.store.getProducts().subscribe((res) => {
      this.productList = res.map((item) => {
        return item.payload.doc.data() as Product;
      });
    });
  }
}
