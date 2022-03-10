import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.css'],
})
export class PictureGalleryComponent implements OnInit {
  constructor() {}

  description: string = '';

  onClickBtn(string1: string) {
    this.description = string1;
  }

  Items: any = [
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (1).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (2).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (3).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (4).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (5).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (6).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (7).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-lukavac/Planika1 (8).jpg',
      description: 'Planika',
      type: 'Planika1',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (1).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (2).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (3).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (4).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (5).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (6).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (7).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (8).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (9).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (10).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (11).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (12).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (13).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (14).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (15).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (16).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (17).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (18).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (19).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (20).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (21).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (22).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (23).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (24).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (25).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (26).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (27).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Planika-mostar/Planika (28).jpg',
      type: 'Planika',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (1).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (2).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (3).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (4).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (5).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (6).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (7).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (8).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (9).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (10).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (11).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (12).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (13).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (14).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (15).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Bjelasnica apartmani/Bjelasnica (16).jpg',
      type: 'Bjelasnica',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (1).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (2).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (3).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (4).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (5).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (6).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (7).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (8).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (9).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (10).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (11).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (12).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (13).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Salamander (Bingo SCC)/Salamander (14).jpg',
      type: 'Salamander',
    },
    {
      urls: 'assets/img/Razno/Razno (1).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (2).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (3).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (4).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (5).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (6).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (7).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (8).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (9).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (10).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (11).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (12).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (13).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (14).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (15).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (16).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (17).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (18).jpg',
      type: 'Razno',
    },
    {
      urls: 'assets/img/Razno/Razno (19).jpg',
      type: 'Razno',
    }
  ];

  ngOnInit() {}
}
