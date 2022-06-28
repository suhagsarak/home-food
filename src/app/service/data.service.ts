import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost:8888/';

  constructor(
    private httpService: HttpClient,
  ) { }

  public register(user) {
    return this.firePostApi(this.baseUrl + 'user', user);
  }
  public login(user) {
    return this.firePostApi(this.baseUrl + 'user/isValid', user);
  }
  public getProducts(category) {
    return this.fireGetApi(this.baseUrl + 'product/categorywise?category=' + category);
  }
  public createOrder(request) {
    return this.firePostApi(this.baseUrl + 'order/create', request);
  }
  public getOwnerOrders() {
    return this.fireGetApi(this.baseUrl + 'order/owner-orders-with-user');
  }
  public getAllDeliveryPersons() {
    return this.fireGetApi(this.baseUrl + 'user/deliverypersons');
  }
  public getDetailsofOrder(oid) {
    return this.fireGetApi(this.baseUrl + `order/order-details?oid=${oid}`);
  }
  public changeOrderStatus(oid, status) {
    return this.fireGetApi(this.baseUrl + `order/update-status?oid=${oid}&status=${status}`);
  }
  public assignDeliveryPersonToOrder(oid, dpid) {
    return this.fireGetApi(this.baseUrl + `order/assign-delivery-person?oid=${oid}&dpid=${dpid}`);
  }
  public getDeliveryPersonOrders(dpid) {
    return this.fireGetApi(this.baseUrl + `order/delivery-person-orders?dpid=${dpid}`);
  }
  public getCustomerOrders(uid) {
    return this.fireGetApi(this.baseUrl + `order/customer-orders?uid=${uid}`);
  }
  public sendFeedback(feedback) {
    return this.firePostApi(this.baseUrl + 'feedback', feedback);
  }
  private fireGetApi(url) {
    return this.httpService.get(url);
  }
  private firePostApi(url, request) {
    return this.httpService.post(url, request);
  }
}
