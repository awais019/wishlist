import { Component, OnInit } from '@angular/core';
import { WishModule } from './wish.module';

import { EventService } from '../shared/services/EventService';
import { WishService } from './wish.service';
import { WishItem } from './models/wishItem';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent implements OnInit {
  items: WishItem[] = [];

  ngOnInit(): void {
    this.wishSerice.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: Error) => {
        alert(error.message);
      }
    );
  }

  constructor(events: EventService, private wishSerice: WishService) {
    events.listen<WishItem>('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  filter: any = () => {};
}
