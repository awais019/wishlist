import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: WishComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
