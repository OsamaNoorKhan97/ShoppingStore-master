import { Component } from '@angular/core';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  {

  constructor(private apiData:ConfigService){
  }
  product : any;
  ngOnInit(){
    this.apiData.getData().subscribe((res :any )=>{
      this.product=res.products;
    });
  }
}
