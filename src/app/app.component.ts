import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from './shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
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

  visibleItems: WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  updateFilter(value: string) {
    this.listFilter = value;
    this.visibleItems =
      this.listFilter == '0'
        ? this.items
        : this.items.filter(
            (item) => item.isComplete != (this.listFilter == '1')
          );
  }
}
