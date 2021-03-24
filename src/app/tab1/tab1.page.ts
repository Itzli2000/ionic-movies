import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature().subscribe(resp => {
      this.recentMovies = resp.results;
    });
    this.moviesService.getPopular().subscribe(resp => {
      this.popularMovies = resp.results;
      console.log(resp.results)
    });
  }
}
