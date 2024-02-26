import { Component, Input } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
