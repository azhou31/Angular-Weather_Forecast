import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'seattle', pathMatch:'full', component:SeattleComponent},
      {path:'losangeles', pathMatch:'full', component:LosangelesComponent},
      {path:'sanjose', pathMatch:'full', component:SanjoseComponent},
      {path:'dallas', pathMatch:'full', component:DallasComponent},
      {path:'newyork', pathMatch:'full', component:NewyorkComponent},
      {path:'chicago', pathMatch:'full', component:ChicagoComponent},
      {path:'search', pathMatch:'full', component:SearchComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
