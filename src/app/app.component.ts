import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { CartService } from './core/providers/cart-service.service';
import { CartModalComponent } from './modules/cart-modal/cart-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, CartModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quantity = 0;

  currentImageIndex = 0;
  images = [
    {
      id: 1,
      src: 'assets/images/image-product-1.jpg',
      alt: 'Product image',
      show: true
    },
    {
      id: 1,
      src: 'assets/images/image-product-2.jpg',
      alt: 'Product image',
      show: false
    },
    {
      id: 1,
      src: 'assets/images/image-product-3.jpg',
      alt: 'Product image',
      show: false
    },{
      id: 1,
      src: 'assets/images/image-product-4.jpg',
      alt: 'Product image',
      show: false
    }
  ]

  constructor(
    private cartService: CartService
  ) {}

  public onButtonClicked(direction: string) {
    if (direction == 'prev') {
      this.currentImageIndex--
    } else {
      this.currentImageIndex++
    }
    this.images.forEach((image, index) => {
      if (index == this.currentImageIndex) {
        image.show = true
      } else {
        image.show = false
      }
    })
  }

  public onAmountDecrease() {
    if (this.quantity !== 0) {
      this.quantity--
    }
  }
  public onAmountIncrease() {
    this.quantity++;
  }
  public onAddToCart() {
    this.cartService.addQuantityToCart(this.quantity);
  }
}
