import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FilterProductsPipe } from './directives/filterProducts/filter-products.pipe';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { SaleDirective } from './directives/sale/sale.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    RegisterComponent,
    KdvPipe,
    SaleDirective,
    IfNotDirective,
    FilterProductsPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
