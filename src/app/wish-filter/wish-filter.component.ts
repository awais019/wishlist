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
    this.updateFilter('0');
  }

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  listFilter: string = '0';

  updateFilter(value: string) {
    this.filter = filters[parseInt(value)];
    this.filterChange.emit(this.filter);
  }
}
