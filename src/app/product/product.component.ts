import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[]= [];


  constructor( private route: Router,
               private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelectProduct(selectedProduct: Product){
    const url = 'products/' + selectedProduct.uuid;
    this.route.navigate([url])
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}
