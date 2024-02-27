import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import events from '../shared/services/EventService';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    // return this.fullFilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  removeWish() {
    events.emit<WishItem>('removeWish', this.wish);
  }

  toggleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
