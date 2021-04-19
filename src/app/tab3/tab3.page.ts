import { DataLocalService } from './../services/data-local.service';
import { MovieDetail } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  movies: MovieDetail[] = [];

  constructor(
    private dataLocal: DataLocalService,
  ) {}

  async ngOnInit() {
    this.dataLocal.loadFavorites()
    .then( data => {
      this.movies = data
      console.log(data)
    });
  }

}
