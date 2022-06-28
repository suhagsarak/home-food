import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/service/data.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  customerOrders: any = []
  deliveryPersons: any = []
  orderStatuses: any = ['RECEIVED', 'ACCEPTED', 'CANCELLED', 'REJECTED', 'CONFIRMED', 'DELIVERED']

  constructor(
    private dataService: DataService,
    public utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.getAllDeliveryPersons();
  }

  private getAllDeliveryPersons() {
    this.dataService.getAllDeliveryPersons().subscribe((response) => {
      this.deliveryPersons = response;
      this.getCustomerOrders();
    })
  }

  private getCustomerOrders() {
    this.dataService.getCustomerOrders(localStorage.getItem('uid')).subscribe((response) => {
      this.customerOrders = response;
      this.customerOrders.forEach(order => {
        order.time = moment(order.time).format('D MMM YYYY, h:mm:ss a');
      });
    })
  }

  public showOrderDetails(order) {
    if (!order.orderDetails)
      this.dataService.getDetailsofOrder(order.oid).subscribe((response) => {
        this.customerOrders.forEach(o => o.orderDetails = null)
        order.orderDetails = response
      })
  }

}
