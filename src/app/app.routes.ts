import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: WishComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'products',
    component: ProductlistComponent,
  },
  {
    path: 'products/:id',
    component: ProductdetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
