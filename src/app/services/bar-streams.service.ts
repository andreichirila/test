import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BarStreamsService {
	public barStream$: Observable<any>;
  constructor() { }
}