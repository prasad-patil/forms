import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class USerService {
  constructor(private httpClient: HttpClient) {}
  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>('/assets/data.json');
  }
}
