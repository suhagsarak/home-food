import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/service/data.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-owner-orders',
  templateUrl: './owner-orders.component.html',
  styleUrls: ['./owner-orders.component.scss']
})
export class OwnerOrdersComponent implements OnInit {

  ownerOrders: any = []

  constructor(
    private dataService: DataService,
    public utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.getOwnerOrders();
  }

  private getOwnerOrders() {
    this.dataService.getOwnerOrders().subscribe((response) => {
      console.log(response);
      this.ownerOrders = response;
      this.ownerOrders.forEach(order => {
        order.time = moment(order.time).format('D MMM YYYY, h:mm:ss a');
      });
    })
  }

  public showOrderDetails(order) {
    if (!order.orderDetails)
      this.dataService.getDetailsofOrder(order.oid).subscribe((response) => {
        this.ownerOrders.forEach(o => o.orderDetails = null)
        order.orderDetails = response
      })
  }
}
