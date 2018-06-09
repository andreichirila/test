import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class BarStreamsService {
	public barStream$: Observable<any>;
  constructor() { }
}
