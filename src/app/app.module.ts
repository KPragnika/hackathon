import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { Prod3Component } from './prod3/prod3.component';
import { Prod4Component } from './prod4/prod4.component';
import { Prod5Component } from './prod5/prod5.component';
import { Prod6Component } from './prod6/prod6.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Prod1Component,
    Prod2Component,
    Prod3Component,
    Prod4Component,
    Prod5Component,
    Prod6Component,
    ProductsComponent,
    ProductdetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
