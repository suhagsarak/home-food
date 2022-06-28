import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('type') === "Delivery Person") {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

}
