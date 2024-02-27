import { Component, OnInit } from '@angular/core';
import { WishModule } from './wish/wish.module';

import { EventService } from './shared/services/EventService';
import { WishService } from './wish/wish.service';
import { WishItem } from './wish/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
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
