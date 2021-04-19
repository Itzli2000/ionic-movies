import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';
import { MovieResult } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchText = '';
  ideas: string[] = [
    'Spiderman',
    'Avenger',
    'El señor de los anillos',
    'La vida es bella',
  ];
  moviesResult: MovieResult[] = [];
  searching = false;

  constructor(
    private modalCtrl: ModalController,
    private movieService: MoviesService
  ) {}

  onSearchChange(event: CustomEvent) {
    const search: string = event.detail.value;
    if (search.length > 0) {
      this.searching = true;
      this.movieService.searchMovie(search).subscribe((data) => {
        this.moviesResult = data.results;
        setTimeout(() => {
          this.searching = false;
        }, 1000);
      });
    } else {
      this.moviesResult = [];
    }
  }

  async showMovie(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        id,
      },
    });
    modal.present();
  }
}
