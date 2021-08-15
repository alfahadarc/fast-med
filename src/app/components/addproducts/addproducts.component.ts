import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})
export class AddproductsComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private store: FirebaseService) {
    this.productForm = this.fb.group({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      boxsize: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.productForm.value);
    this.store.createProduct(this.productForm.value);
    alert('Successfully added');
  }
}
