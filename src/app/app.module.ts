import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BuyThanksComponent } from './components/buy-thanks/buy-thanks.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OwnerOrdersComponent } from './components/owner-orders/owner-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    LoginComponent,
    BuyThanksComponent,
    FeedbackComponent,
    OrdersComponent,
    OwnerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
