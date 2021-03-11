import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getFeature() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=0e045ea0a91d519c0e8234c6b616ce5f&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-01-30&language=es&include_image_language=es'
    );
  }
}
