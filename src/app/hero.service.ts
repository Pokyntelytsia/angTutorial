import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Hero } from './hero';
import { Heroes } from './heroes-mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable <Hero[]> {
    this.messageService.add('Heroes fetched');
    return of(Heroes);
  }

  getHero(id: number): Observable <Hero> {
    this.messageService.add(`Fetched hero with id = ${id}`);
    return of(Heroes.find(oneHero => oneHero.id === id));
  }
}
