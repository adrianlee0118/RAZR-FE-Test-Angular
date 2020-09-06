import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //module for making http requests to and from some URI like axios or fetch
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  url: string = "https://www.random.org/integers/?num=100&min=1&max=100&col=1&base=10&format=plain&rnd=new";  //100 random numbers between 1 and 100 as a string separated by return characters

  constructor(private http: HttpClient) { }

  getNumbers(): Observable<string> {
    return this.http.get(this.url , { responseType: 'text' });
  }
}
