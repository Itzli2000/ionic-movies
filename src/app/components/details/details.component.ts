import { Cast, MovieDetail } from './../../interfaces/interfaces';
import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id: string;
  movie: MovieDetail;
  actors: Cast[] = [];
  hideText = 150;

  slideCastOptions = {
    slidesPerView: 3.3,
    freemode: true,
    spacebetween: -5
  };

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {
    this.moviesService
      .getMovieDetail(this.id)
      .subscribe((data) => (this.movie = data));
    this.moviesService.getMovieCredits(this.id).subscribe((data) => {
      this.actors = data.cast;
    });
  }

  showHideText() {
    this.hideText == 150
      ? (this.hideText = this.movie.overview.length)
      : (this.hideText = 150);
  }

  back() {
    this.modalCtrl.dismiss();
  }

  favorite() {
    console.log('favorito', this.movie.id);
  }
}
