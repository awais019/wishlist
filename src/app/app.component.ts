import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from './shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular 2'),
    new WishItem('Get a job', true),
    new WishItem('Start a company'),
  ];

  listFilter = '0';
  newWishText = '';

  title = 'wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[parseInt(this.listFilter)]);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
