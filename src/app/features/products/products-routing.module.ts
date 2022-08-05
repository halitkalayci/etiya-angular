import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: 'add-product', component: AddProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
