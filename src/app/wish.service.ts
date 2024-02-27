import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { WishItem } from './shared/models/wishItem';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
  }

  getWishes() {
    const options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      },
    });
    return this.http
      .get('assets/wishes1.json', options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error
      );
    } else {
      console.error('Server-side error:', error.error);
    }

    return throwError(
      () =>
        new Error('Cannot retrieve wishes from the server. Please try again.')
    );
  }

  private addWish(wish: WishItem) {
    const options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value');
    return this.http.post('assets/wishes.json', wish, options);
  }
}
