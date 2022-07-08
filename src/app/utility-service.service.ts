import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }

  userName = new Subject<any>()
}
