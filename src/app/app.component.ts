import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from './shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items = [
    new WishItem('Learn Angular 2'),
    new WishItem('Get a job', true),
    new WishItem('Start a company'),
  ];
  title = 'wishlist';
}
