import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullFilled!: boolean;
  @Output() fullFilledChange = new EventEmitter<boolean>();

  toggleFullFilled() {
    this.fullFilled = !this.fullFilled;
    this.fullFilledChange.emit(this.fullFilled);
  }
}
