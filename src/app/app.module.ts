import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
