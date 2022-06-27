import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  userOrder: Array<any>;

  constructor(
    private localStorageService: LocalStorageService,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    let rating;
    this.userOrder = this.localStorageService.getUserOrder().map((ord) => {
      rating = this.utilsService.getRating();
      return {
        ...ord,
        pName: this.utilsService.getItemName(ord.name),
        rating,
        ratPerc: (rating / 5) * 100,
        // src: `/assets/image/${this.category}/${ord.name}`
      }
    });
  }

}
