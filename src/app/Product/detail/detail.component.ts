import { Component } from '@angular/core';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  detail: any;
  ID: any;

  constructor(private apiDetail:ConfigService){
  }

  ngOnInit(){
    this.apiDetail.getProductData(this.ID).subscribe((res :any )=>{
      this.detail=res.products;
    });
  }
}
