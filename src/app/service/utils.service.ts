import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getItemName(imageName) {
    return imageName
      .split(".")[0]
      .split("-")
      .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
      .join(" ");
  }

  public getRating() {
    let min = 4;
    let max = 5;
    return Math.round((Math.random() * (max - min) + min) * 10) / 10;
  }
}
