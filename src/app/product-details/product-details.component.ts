import { Component, OnInit } from '@angular/core';
import {ProductDetail} from "./productDetail";
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "../product.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct?: ProductDetail | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
) { }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct() :void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if(uuid){
      this.productService.getProduct(uuid)
        .subscribe(product => this.selectedProduct = product);
    }

}
}
