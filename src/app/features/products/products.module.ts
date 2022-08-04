import { CommonModule } from '@angular/common';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products/products.service';
import { SaleDirective } from './directives/sale/sale.directive';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent, SaleDirective, KdvPipe],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
