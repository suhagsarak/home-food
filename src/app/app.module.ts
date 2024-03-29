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
import { FeedbackComponent } from './components/feedback/feedback.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OwnerOrdersComponent } from './components/owner-orders/owner-orders.component';
import { FormsModule } from '@angular/forms';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { DeliveryPersonOrdersComponent } from './components/delivery-person-orders/delivery-person-orders.component';
import { PaySuccessComponent } from './components/pay-success/pay-success.component';
import { PayFailComponent } from './components/pay-fail/pay-fail.component';

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
    FeedbackComponent,
    OrdersComponent,
    OwnerOrdersComponent,
    MyOrdersComponent,
    DeliveryPersonOrdersComponent,
    PaySuccessComponent,
    PayFailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
