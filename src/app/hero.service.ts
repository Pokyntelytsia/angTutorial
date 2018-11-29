import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Hero } from './hero';
import { Heroes } from './heroes-mock';
import { MessageService } from './message.service';
import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable <Hero[]> {
    this.messageService.add('Heroes fetched');
    return of(Heroes);
  }
}
