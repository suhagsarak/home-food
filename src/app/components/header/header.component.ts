import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isUserLoggedIn;
  isUserOwner;
  interval

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.isUserLoggedIn = localStorage.getItem('email');
      this.isUserOwner = localStorage.getItem('type') === 'Owner';
    }, 100);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval)
  }

  public logout() {
    localStorage.removeItem('uid');
    localStorage.removeItem('email');
    localStorage.removeItem('type');
    this.router.navigate(['login']);
  }

}
