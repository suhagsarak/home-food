import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  userOrder: Array<any> = [];
  isOrderComplete: boolean;
  totalPrice: number;

  constructor(
    private localStorageService: LocalStorageService,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    const products: Array<any> = this.localStorageService.getUserOrder();
    const counts = {};
    products.forEach((orde) => {
      counts[orde.pid] = (counts[orde.pid] || 0) + 1;
    });
    let rating, prod;
    this.totalPrice = 0
    this.userOrder = [];
    Object.keys(counts).forEach((pid) => {
      prod = products.find((o) => o.pid == pid);
      this.userOrder.push({ ...prod, count: counts[pid] });
    });
    this.userOrder = this.userOrder.map((ord) => {
      rating = this.utilsService.getRating();
      this.totalPrice += ord.count * ord.price;
      return {
        ...ord,
        pName: this.utilsService.getItemName(ord.name),
        rating,
        ratPerc: (rating / 5) * 100,
        src: `/assets/image/${ord.category}/${ord.name}`,
        totalPrice: (ord.count * ord.price)
      }
    });
  }

  checkOut() {
    // API
    this.isOrderComplete = true;
  }

}
