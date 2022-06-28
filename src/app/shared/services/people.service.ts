import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Lucas',
        lastName: 'Santos',
        age: 26
      },
      {
        firstName: 'João',
        lastName: 'Silva',
        age: 30
      },
      {
        firstName: 'Bruno',
        lastName: 'Lima',
        age: 45
      },
      {
        firstName: 'Carlos',
        lastName: 'Saboia',
        age: 16
      }
    ]

    return of(peopleArray)
  }

}
