import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


//   loadOrders() {
//     let pName;
//     for (let food of this.userOrders) {
//       pName = getItemName(food.name);
//       rating = getRating();
//       ratPerc = (rating / 5) * 100;
//       let eles = `
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
//       console.log(eles);
//       $('#loadOrdersHere').append(eles);
//     }
//   }

//   if(window.location.href.indexOf('orders.html') != -1) {
//   loadOrders();
// }

}
