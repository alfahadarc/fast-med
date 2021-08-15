import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';

const routes: Routes = [
  { path: 'home', component: ProductsComponent },
  { path: 'addproduct', component: AddproductsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
