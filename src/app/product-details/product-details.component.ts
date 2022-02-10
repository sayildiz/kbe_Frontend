import { Component, OnInit } from '@angular/core';
import {ProductDetail} from "./productDetail";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: ProductDetail = {
    uuid: "something",
    name: "Iphone",
    price: 399.99,
    usdPrice: 500,
    vat: 100,
    description: "LOREMIPSDOAISJHFDNLKASDFNBÜAOSDIFHNAÜOIF",
    location: "berlin",
    amount: 4,
    deliveryTime: 2,

  }
  constructor() { }

  ngOnInit(): void {
  }

}
