import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseMDB } from '../interfaces/interfaces';

const URL = environment.url;
const APIKEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private runQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${APIKEY}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getFeature() {
    const today = new Date();
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const month = today.getMonth() + 1;
    let monthString;
    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }
    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lastDay}`;
    return this.runQuery<ResponseMDB>(
      `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`
    );
  }

  getPopular() {
    return this.runQuery<ResponseMDB>(
      `/discover/movie?sort_by=popularity.desc`
    );
  }
}
