import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http=inject(HttpClient);
  constructor() {

  }

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
