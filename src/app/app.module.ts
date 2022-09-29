import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
import { LoadCitydata } from 'LoadCitydata';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { FooderComponent } from './fooder/fooder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ShopBasketComponent } from './shop-basket/shop-basket.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavSideComponent } from './nav-side/nav-side.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageSliderComponent,
    HeaderComponent,
    LoginComponent,
    FooderComponent,
    ShopBasketComponent,
    NavSideComponent,
    FilterProductsComponent,
    SearchProductsComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatSidenavModule,
    MatBadgeModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule

  ],
  providers: [LoadCitydata],
  bootstrap: [AppComponent]
})
export class AppModule { }
