import { MovieDetails } from './../interfaces/imdb.interfaces';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { IMDBTitleFindRes } from '../interfaces/imdb.interfaces';
import {
  combineAll,
  concatMap,
  delay,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMostPopular(search: string): Observable<any> {
    const params = {
      homeCountry: 'ES',
      purchaseCountry: 'ES',
      currentCountry: 'ES',
    };
    const headers = this.authService.httpHeaders;

    return this.http
      .get<string[]>(this.apiUrl + '/title/get-most-popular-movies', {
        params,
        headers,
      })
      .pipe(
        tap((res) => {
          for (const id of res) {
            from(id);
          }
        }),
        combineAll()
      );
  }

  getOverViewDetails(id: string): Observable<MovieDetails> {
    const params = {
      tconst: id,
      currentCountry: 'ES',
    };
    const headers = this.authService.httpHeaders;
    return this.http.get<MovieDetails>(
      this.apiUrl + '/title/get-overview-details',
      { params, headers }
    );
  }
}
