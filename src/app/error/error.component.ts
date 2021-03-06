import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  error? :string ;
  constructor(
  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getError();
  }


  getError(): void {
    const errorCode = this.route.snapshot.paramMap.get('id');
    if(errorCode){
      this.error = errorCode;
    }

  }
}
