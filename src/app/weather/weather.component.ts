import { Component, OnInit, Input } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  @Input() cities: any;

  allCities = [];

  constructor(private http: Http) {
   }

   ngOnInit() {
      console.log(this.cities);
      this.cities.forEach((city, index)=> {
        this.http.get("https://www.metaweather.com/api/location/search/?query="+city)
          .pipe(map((res: Response) => res.json()))
          .subscribe(data => {
            let woeid = data[0]['woeid']

            this.http.get("https://www.metaweather.com/api/location/"+woeid)
              .pipe(map((res: Response) => res.json()))
              .subscribe(data => {
                this.allCities.push(data)
              })
          })
      })
  }



}

