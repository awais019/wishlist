import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@NgModule({
  declarations: [
    AddWishFormComponent,
    WishListComponent,
    WishListItemComponent,
    WishFilterComponent,
  ],
  imports: [CommonModule, NgClass, FormsModule, HttpClientModule],
  exports: [
    AddWishFormComponent,
    WishListComponent,
    WishListItemComponent,
    WishFilterComponent,
  ],
})
export class WishModule {}
