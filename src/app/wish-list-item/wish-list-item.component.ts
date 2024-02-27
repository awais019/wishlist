import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import events from '../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullFilled!: boolean;
  @Output() fullFilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fullFilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.fullFilled };
  }

  removeWish() {
    events.emit<string>('removeWish', this.wishText);
  }

  toggleFullFilled() {
    this.fullFilled = !this.fullFilled;
    this.fullFilledChange.emit(this.fullFilled);
  }
}
