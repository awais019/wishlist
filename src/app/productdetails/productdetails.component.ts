import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../productlist/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent implements OnInit {
  product: any = {};

  constructor(private store: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (!id) return;

      this.store.getProduct(parseInt(id)).subscribe((product) => {
        this.product = product;
      });
    });
  }
}
