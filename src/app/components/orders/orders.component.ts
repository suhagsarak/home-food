import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  userOrder: Array<any> = [];

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
    Object.keys(counts).forEach((pid) => {
      prod = products.find((o) => o.pid == pid);
      this.userOrder.push({ ...prod, count: counts[pid] });
    });
    this.userOrder.map((ord) => {
      rating = this.utilsService.getRating();
      return {
        ...ord,
        pName: this.utilsService.getItemName(ord.name),
        rating,
        ratPerc: (rating / 5) * 100,
        src: `/assets/image/${ord.category}/${ord.name}`
      }
    });
  }

}
