import { DetailsComponent } from './../details/details.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movie[];

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  async showMovie(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
