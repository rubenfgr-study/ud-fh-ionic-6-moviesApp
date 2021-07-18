import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get httpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': environment.apiKey,
      'x-rapidapi-host': environment.apiHost,
    });
  }
}
