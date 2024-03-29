import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
    },
  ];

  constructor() {}

  getProducts() {
    return of(this.products);
  }

  getProduct(id: number) {
    return of(this.products.find((product) => product.id === id));
  }
}
