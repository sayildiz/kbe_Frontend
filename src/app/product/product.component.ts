import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [{
    uuid: "something",
    name: "Iphone",
    price: 399.99,
    usdPrice: 500,
    description: "LOREMIPSDOAISJHFDNLKASDFNBÜAOSDIFHNAÜOIF"
  }]


  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  onSelectProduct(selectedProduct: Product){
    const url = 'products/' + selectedProduct.uuid;
    console.log("CLICK");
    this.route.navigate([url])
  }
}
