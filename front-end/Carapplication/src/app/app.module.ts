import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security/security.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { YearsModule } from './years/years.module';
import { CarsComponent } from './cars/cars/cars.component';
import { CarsModule } from './cars/cars.module';
import { MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityInterceptor } from './security/security.interceptor';
import { DealersComponent } from './dealers/dealers.component';
import { FavoriteCarsComponent } from './favorite-cars/favorite-cars/favorite-cars.component';
import { AdddealerComponent } from './dealers/adddealer/adddealer.component';
import { MyAdsComponent } from './ads/my-ads/my-ads.component';
import { AdsComponent } from './ads/ads/ads.component';
import { AdDetailsComponent } from './ads/adDetails/ad-details/ad-details.component';

const appRoutes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'myAds', component: MyAdsComponent },
  { path: 'login', component: SecurityComponent },
  { path: 'ads', component: AdsComponent },
  { path: 'ad/:id', component: AdDetailsComponent },
  { path: 'dealers', component: DealersComponent },
  { path: 'adddealer', component: AdddealerComponent },
  { path: 'changedealer/:id', component: AdddealerComponent },
  { path: '**', component: SecurityComponent },
  { path: 'favorites', component: FavoriteCarsComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    NavbarComponent,
    FooterComponent,
    AdsComponent,
    AdDetailsComponent,
    DealersComponent,
    FavoriteCarsComponent,
    MyAdsComponent,
    AdddealerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    YearsModule, 
    CarsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
