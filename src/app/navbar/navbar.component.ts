import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  cartProducts:any

  constructor(productService:ProductService) {

  productService.getCount().subscribe(res => {
    this.cartProducts = res;
  })

  }

 

}
