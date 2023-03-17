import { Component,OnInit,OnDestroy } from '@angular/core';
import {City} from './city.interface'
import {CityService} from './citiy.service'
import {Subscription,BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'my-pos';
  cities:City[] = [];
  sortedCityList:Array<City> = [];
  showDetails:boolean = false;
  selectedCity:City = {
    name: '',
    count:0,
    'content:':''
  };
  sub!: Subscription;
  subject = new BehaviorSubject(0);
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.sub = this.cityService.getCities()
    .subscribe((cities)=>{
      this.sortCities(cities);
    });
  }
  getCityDetails(city:City){
    this.selectedCity = city;
    this.showDetails = true;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  sortCities(tempArr:City[]){
      //Sort array alphabetically based on name 
      this.sortedCityList = tempArr.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
  }
  
}
