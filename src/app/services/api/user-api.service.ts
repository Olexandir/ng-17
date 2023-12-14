import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../interfaces/api/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_URL = '/users';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${environment.BASE_URL}${this.USER_URL}`);
  }
}
