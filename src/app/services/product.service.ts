import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public countProduct: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { }

  getCount(){
    return this.countProduct.asObservable()
  }

  updateCount(updateCart:any){
    this.countProduct.next(updateCart)
    console.log(this.countProduct)
    return this.countProduct
    
  }
}
