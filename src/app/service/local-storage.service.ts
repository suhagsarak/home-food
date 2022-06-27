import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  orders;
  email;
  userOrder;
  category;

  constructor() {
    this.initialise();
  }

  private saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  private getOrders() {
    this.orders = JSON.parse(localStorage.getItem('orders') || '{}');
  }

  private initialise() {
    this.getOrders();
    // user should be logged in
    this.email = localStorage.getItem('email') || '';
    if (this.email) {
      this.userOrder = this.orders[this.email];
      if (!this.userOrder) {
        this.userOrder = [];
        this.orders[this.email] = this.userOrder;
        this.saveOrders();
      }
    }
  }

  public addToCart(product) {
    this.initialise();
    this.userOrder.push(product);
    this.saveOrders();
  }

  public getUserOrder() {
    this.initialise();
    return this.userOrder;
  }

  // call only from buythanks page
  public clearOrdersForUser() {
    this.userOrder = [];
    this.orders[this.email] = this.userOrder;
    this.saveOrders();
  }

}
