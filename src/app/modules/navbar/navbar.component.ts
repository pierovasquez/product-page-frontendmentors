import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../core/providers/cart-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public expandMobilePanel: boolean = false;
  public expandCartMenu: boolean = false;

  constructor(
    private cartService: CartService
  ) {}

  public onToggleModalMenu($event: boolean) {
    this.expandMobilePanel = $event;
  }

  public onToggleShowCart() {
    this.expandCartMenu = !this.expandCartMenu
    this.cartService.toggleShowCartModal(this.expandCartMenu)
  }

}
