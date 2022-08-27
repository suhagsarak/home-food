import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UtilsService } from 'src/app/service/utils.service';
import { PayService } from 'src/app/service/pay.service';

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
    private dataService: DataService,
    private payService: PayService,
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
    const request = {
      totalPrice: this.totalPrice,
      uid: localStorage.getItem('uid'),
      products: this.userOrder
    }
    this.dataService.createOrder(request).subscribe(response => {
      // this.isOrderComplete = true;
      this.payService.getPayment(response['insertId'], '', request.totalPrice)
    });
  }

  clearOrders() {
    this.userOrder = [];
    this.localStorageService.clearOrdersForUser();
  }

}
