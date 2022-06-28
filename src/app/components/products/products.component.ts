import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  category: string;
  foods: Array<any>;

  loader = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private utilsService: UtilsService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.getProducts();
    });
  }

  private getProducts() {
    this.loader = true;
    this.dataService.getProducts(this.category).subscribe((response: any) => {
      let rating;
      this.foods = response.map((food) => {
        rating = this.utilsService.getRating();
        return {
          ...food,
          pName: this.utilsService.getItemName(food.name),
          rating,
          ratPerc: (rating / 5) * 100,
          src: `/assets/image/${this.category}/${food.name}`
        }
      })
      this.loader = false;
    })

  }

  public addToCart(food) {
    this.localStorageService.addToCart(food);
  }

}
