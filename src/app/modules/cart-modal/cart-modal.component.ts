import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/providers/cart-service.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent implements OnInit {

  cartQuantity = 1;
  productPrice = 125
  productTotalPrice = 0;
  showCartModal$: Observable<boolean> = new Observable();

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.addQuantityToCart$.subscribe(res => this.cartQuantity += res);
    this.showCartModal$ = this.cartService.showCartModal$
  }

  onDeleteCartQuantity() {
    this.cartQuantity = 0;
  }

}
