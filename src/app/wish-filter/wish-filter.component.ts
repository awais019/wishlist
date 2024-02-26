import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  @Output() filter = new EventEmitter<Function>();

  listFilter: string = '0';

  changeFilter() {
    this.filter.emit(filters[parseInt(this.listFilter)]);
  }
}
