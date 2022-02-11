import { Component, OnInit } from '@angular/core';
import {Price} from "./price";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.scss']
})
export class VatCalculatorComponent implements OnInit {
  value?: number;
  price: Price = {
    net: 0,
    vat: 0,
    gross: 0
  };
  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
  }

  getVAT(): void{
    console.log("Called");
    if(this.value){
      this.calculatorService.getVAT(this.value)
        .subscribe(price => this.price = price);
    }
  }

}
