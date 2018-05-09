import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { SearchComponent } from './search/search.component';

//PIPES
import { CapitalizePipe } from './capitalize.pipe';

//SERVICES
import { WeatherServiceService } from './weather-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    DallasComponent,
    ChicagoComponent,
    LosangelesComponent,
    NewyorkComponent,
    CapitalizePipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
