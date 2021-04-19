import { MovieDetail } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  movies: MovieDetail[] = [];
  private _storage: Storage | null = null;

  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  saveMovie(movie: MovieDetail) {
    let exist = false;
    let message = '';
    for (const currentMovie of this.movies) {
      if (currentMovie.id === movie.id) {
        exist = true;
        break;
      }
    }
    if (exist) {
      this.movies = this.movies.filter((mov) => mov.id !== movie.id);
      message = 'Removido de favoritos';
    } else {
      this.movies.push(movie);
      message = 'Agregado a favoritos';
    }
    this._storage.set('movies', this.movies);
    this.presentToast(message);
  }

  async loadFavorites() {
    const moviesStore = await this._storage.get('movies');
    this.movies = moviesStore || [];
    return this.movies;
  }

  async isFavorite(id: any) {
    id = Number(id);
    await this.loadFavorites();
    const exist = this.movies.find((mov) => mov.id === id);
    return exist ? true : false;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
