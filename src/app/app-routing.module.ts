import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductspageTshirtComponent } from './categories/productspage-tshirt/productspage-tshirt.component';
import { ShirtsComponent } from './categories/shirts/shirts.component';
import { AccessoriesComponent } from './categories/accessories/accessories.component';
import { HoodiesComponent } from './categories/hoodies/hoodies.component';
import { PantsComponent } from './categories/pants/pants.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { MainpageComponent } from './mp/mainpage/mainpage.component';
import { MainpagecardsComponent } from './mp/mainpagecards/mainpagecards.component';
import { InfiniteSliderComponent } from './mp/infinite-slider/infinite-slider.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes =[
  {
    path:"",component:MainpageComponent
  },
  {
    path:"footer",component:FooterComponent
  },
  {
    path:"tshirt",component:ProductspageTshirtComponent
  },
  {
    path:"shirts",component:ShirtsComponent
  },
  {
    path:"accessories",component:AccessoriesComponent
  },
  {
    path:"hoodies",component:HoodiesComponent
  },
  {
    path:"pants",component:PantsComponent
  },
  {
    path:"checkout",component:CheckoutComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"ordersuccess",component:DetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
