import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];

  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.store.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
