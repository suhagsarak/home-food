import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  orders;
  email;
  userOrders;
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
    if (!this.orders) {
      this.orders = {};
      this.saveOrders();
    }
    // user should be logged in
    this.email = localStorage.getItem('email') || '';
    if (this.email) {
      this.userOrders = this.orders[this.email];
      if (!this.userOrders) {
        this.orders[this.email] = [];
        this.saveOrders();
      }
    }
  }

  public addToCart(product) {
    this.initialise();
    this.userOrders.push(product);
    this.saveOrders();
  }

  public checkOut() {

    // let total = 0;
    // userOrders.forEach(element => {
    //     total = total + element.price;
    // });

    // localStorage.setItem('total', total);

    // userOrders = [];
    // orders[email] = userOrders;
    // saveOrders();


    window.location.href = "buythanks.html";
  }

  // call only from buythanks page
  public clearOrders() {
    this.userOrders = [];
    this.orders[this.email] = this.userOrders;
    this.saveOrders();
  }

}
