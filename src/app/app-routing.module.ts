import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ErrorComponent} from "./error/error.component";
import {VatCalculatorComponent} from "./vat-calculator/vat-calculator.component";

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent},
  { path: 'products/:uuid', component: ProductDetailsComponent },
  { path: 'error/:id', component: ErrorComponent },
  { path: 'vat', component: VatCalculatorComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
