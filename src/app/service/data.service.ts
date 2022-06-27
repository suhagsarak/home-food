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
