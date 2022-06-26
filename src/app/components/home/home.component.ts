import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  slides: Array<any> = [{
    id: 'topimgmh1', counter: 0, folder: 'maharashtra',
    imagefiles: ["aamrakhand.jpg", "shrikhand1.jpg", "modak1.webp", "sol-kadhi.jpg", "sabudana-khichdi.jpg"]
  }, {
    id: 'topimgmh2', counter: 0, folder: 'maharashtra',
    imagefiles: ["tambda-rassa.jpg", "pandhara-rassa.jpg", "gulab-jamun.jpg", "thalipeeth.jpg", "pav-bhaji.jpg"]
  }, {
    id: 'topimgst2', counter: 0, folder: 'south',
    imagefiles: ["masala-dosa.jpg", "idli.jpeg", "mysore-pak.jpg", "palkova.jpg", "thengai-paal-payasam.jpg"]
  }, {
    id: 'topimgpu3', counter: 0, folder: 'punjabi',
    imagefiles: ["rajma-chawal.jpg", "Paratha.jpg", "kashmiri-dum-aloo.jpg", "baigan-bharta.jpg", "litti-chokha.jpg"]
  }];

  imgLinks: any = {
    topimgmh1: '../assets/image/maharashtra/modak1.webp',
    topimgmh2: '../assets/image/maharashtra/pithale.jpg',
    topimgst2: '../assets/image/south/holige.jpg',
    topimgpu3: '../assets/image/punjabi/aloo-ka-parantha.jpg',
  }

  interal: any;

  constructor() { }

  ngOnInit() {
    this.interal = setInterval(() => {
      for (const slide of this.slides) {
        this.imgLinks[slide['id']] = `../assets/image/${slide.folder}/` + slide.imagefiles[slide.counter];
        slide.counter++;
        if (slide.counter > 4) { slide.counter = 0; }
      }
    }, 2000)
  }

  ngOnDestroy() {
    if (this.interal) clearInterval(this.interal);
  }
}
