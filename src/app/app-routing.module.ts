import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent, 
  },
  {
    path: "search/:keyword",
    component: SearchComponent, 
  },
  {
    path: "weather/:woeid",
    component: WeatherDetailComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

