import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WeatherServiceService } from './weather-service.service';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    DallasComponent,
    ChicagoComponent,
    LosangelesComponent,
    NewyorkComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
