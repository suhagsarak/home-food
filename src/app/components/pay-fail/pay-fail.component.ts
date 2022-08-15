import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-fail',
  templateUrl: './pay-fail.component.html',
  styleUrls: ['./pay-fail.component.scss']
})
export class PayFailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    })
  }

}
