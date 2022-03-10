import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-bootcarousel',
  templateUrl: './bootcarousel.component.html',
  styleUrls: ['./bootcarousel.component.css']
})
export class BootcarouselComponent {

public  slides = [
    {'image': 'assets/img/slika1.jpg'},
    {'image': 'assets/img/slika2.jpg'},
    {'image': 'assets/img/slika3.jpg'},
];


}
