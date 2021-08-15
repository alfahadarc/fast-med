import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  createProduct(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('Products')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  getProducts() {
    return this.firestore.collection('Products').snapshotChanges();
  }
}
