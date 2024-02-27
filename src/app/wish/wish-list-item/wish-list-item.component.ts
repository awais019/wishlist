import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { WishItem } from '../models/wishItem';

import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  constructor(private events: EventService) {}

  get cssClasses() {
    // return this.fullFilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  removeWish() {
    this.events.emit<WishItem>('removeWish', this.wish);
  }

  toggleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
