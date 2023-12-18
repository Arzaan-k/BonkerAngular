import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mp/mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { InfiniteSliderComponent } from './mp/infinite-slider/infinite-slider.component';
import { MainpagecardsComponent } from './mp/mainpagecards/mainpagecards.component';
import { ProductspageTshirtComponent } from './categories/productspage-tshirt/productspage-tshirt.component';
import { PantsComponent } from './categories/pants/pants.component';
import { ShirtsComponent } from './categories/shirts/shirts.component';
import { HoodiesComponent } from './categories/hoodies/hoodies.component';
import { AccessoriesComponent } from './categories/accessories/accessories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    FooterComponent,
    InfiniteSliderComponent,
    MainpagecardsComponent,
    ProductspageTshirtComponent,
    PantsComponent,
    ShirtsComponent,
    HoodiesComponent,
    AccessoriesComponent,
    CheckoutComponent,
    ContactComponent,
    AboutComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
