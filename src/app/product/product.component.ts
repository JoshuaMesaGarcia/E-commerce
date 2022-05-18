import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductComponent  {

  numberOfProduct:any
  cartDisplay:boolean = false

  images = [
    { src: "../../assets/images/image-product-1.jpg" },
    { src: "../../assets/images/image-product-2.jpg" },
    { src: "../../assets/images/image-product-3.jpg" }
  ];
  
  constructor(config: NgbCarouselConfig,public productService:ProductService) {
    
    config.interval = 10000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false

    productService.getCount().subscribe(res => {
      this.numberOfProduct = res
    })


  }

  increaseProduct(){
    
    return this.numberOfProduct++
  }

  decreaseProduct(){
    if(this.numberOfProduct == 0){
      return this.numberOfProduct = 0;
    }else{
      return this.numberOfProduct--;
    }
  }

  addingProduct(){
    // if(this.numberOfProduct > 0){
    //   this.cartDisplay = true
    // }else{
    //   this.cartDisplay = false
    // }
    this.cartDisplay = true
    this.productService.updateCount(this.numberOfProduct)
  }
  
}
