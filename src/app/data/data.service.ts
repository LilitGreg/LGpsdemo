import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  getSubsciptionTypes(): Observable<string[]>  {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings ):Observable<any> {

     return this.http.post('https://putsreq.com/AIyiZbQ2kNvs8SdrD612', userSettings);


    //return of(userSettings);
    }


}
