import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-thanks',
  templateUrl: './buy-thanks.component.html',
  styleUrls: ['./buy-thanks.component.scss']
})
export class BuyThanksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // loadOrdersInThanks() {
  //   let pName;
  //   for (let food of userOrders) {
  //     pName = getItemName(food.name);
  //     rating = getRating();
  //     ratPerc = (rating / 5) * 100;
  //     let eles = `
  //         <div class="order-list">
  //             <div class="order-item-con">
  //                 <div class="order-image-con">
  //                     <img class="order-image" src="image/${food.category}/${food.name}" />
  //                 </div>
  //                 <div class="order-details">
  //                     <div class="order-name">
  //                         <span>${pName}</span>
  //                     </div>
  //                     <div class="order-price">
  //                         <span class="price">${food.price}</span>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //         `;
  //     $('#loadOrdersHere').append(eles);
  //   }
  // }

}
