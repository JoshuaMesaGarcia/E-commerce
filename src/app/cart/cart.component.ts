
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  numberOfProduct:any
  cartDisplay:boolean = false

  constructor(productService:ProductService) {

    productService.getCount().subscribe(res => {
      this.numberOfProduct = res
    })
  }

  
}
