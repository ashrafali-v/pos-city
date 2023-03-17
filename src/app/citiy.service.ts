import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { map } from 'rxjs/operators';
import {City} from './city.interface'
import {CityList} from './city-list'

@Injectable({
  providedIn: 'root'
})
export class CityService {  
  constructor() { }

  getCities(): Observable<City[]> {
    return of(CityList.cities).pipe(map((city: any) => city)) 
  }

}