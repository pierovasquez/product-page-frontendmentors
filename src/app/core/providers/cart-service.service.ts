import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private $addQuantityToCart: Subject<number> = new Subject<number>();
  public addQuantityToCart$: Observable<number> = this.$addQuantityToCart.asObservable();
  private $showCartModal: Subject<boolean> = new BehaviorSubject<boolean>(false);
  public showCartModal$: Observable<boolean> = this.$showCartModal.asObservable();

  constructor() { }


  addQuantityToCart(quantity: number) {
    this.$addQuantityToCart.next(quantity);
  }

  toggleShowCartModal(showValue: boolean) {
    this.$showCartModal.next(showValue)
  }
}
