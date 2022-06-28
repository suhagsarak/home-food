import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from 'src/app/service/data.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-delivery-person-orders',
  templateUrl: './delivery-person-orders.component.html',
  styleUrls: ['./delivery-person-orders.component.scss']
})
export class DeliveryPersonOrdersComponent implements OnInit {

  deliveryPersonOrders: any = []
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
      this.getDeliveryPersonOrders();
    })
  }

  private getDeliveryPersonOrders() {
    this.dataService.getDeliveryPersonOrders(localStorage.getItem('dpid')).subscribe((response) => {
      this.deliveryPersonOrders = response;
      this.deliveryPersonOrders.forEach(order => {
        order.time = moment(order.time).format('D MMM YYYY, h:mm:ss a');
      });
    })
  }

  public changeOrderStatus(index) {
    const orde = this.deliveryPersonOrders[index];
    this.dataService.changeOrderStatus(orde.oid, orde.status).subscribe(response => { })
  }

  public showOrderDetails(order) {
    if (!order.orderDetails)
      this.dataService.getDetailsofOrder(order.oid).subscribe((response) => {
        this.deliveryPersonOrders.forEach(o => o.orderDetails = null)
        order.orderDetails = response
      })
  }
}
