import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
