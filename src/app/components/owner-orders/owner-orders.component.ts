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
  deliveryPersons: any = []
  orderStatuses: any = ['RECEIVED', 'ACCEPTED', 'CANCELLED', 'REJECTED', 'CONFIRMED', 'DELIVERED']

  constructor(
    private dataService: DataService,
    public utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.getAllDeliveryPersons();
  }

  private getOwnerOrders() {
    this.dataService.getOwnerOrders().subscribe((response) => {
      this.ownerOrders = response;
      this.ownerOrders.forEach(order => {
        order.time = moment(order.time).format('D MMM YYYY, h:mm:ss a');
      });
    })
  }

  private getAllDeliveryPersons() {
    this.dataService.getAllDeliveryPersons().subscribe((response) => {
      this.deliveryPersons = response;
      this.getOwnerOrders();
    })
  }

  public showOrderDetails(order) {
    if (!order.orderDetails)
      this.dataService.getDetailsofOrder(order.oid).subscribe((response) => {
        this.ownerOrders.forEach(o => o.orderDetails = null)
        order.orderDetails = response
      })
  }
  public changeOrderStatus(index) {
    const orde = this.ownerOrders[index];
    this.dataService.changeOrderStatus(orde.oid, orde.status).subscribe(response => { })
  }

  public assignDeliveryPersonToOrder(index) {
    const orde = this.ownerOrders[index];
    orde.dpid = parseInt(orde.dpid);
    this.dataService.assignDeliveryPersonToOrder(orde.oid, orde.dpid).subscribe(response => { })
  }
}
