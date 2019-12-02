import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AdsComponent } from 'src/ads/ads/ads.component';

const appRoutes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'login', component: SecurityComponent },
  { path: 'ads', component: AdsComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    NavbarComponent,
    FooterComponent,
    AdsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
