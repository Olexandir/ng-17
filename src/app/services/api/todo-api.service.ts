import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoDTO } from '../../interfaces/api/todo.interface';
import { CoreAPIService } from './core.service';

@Injectable({
  providedIn: 'root',
})
export class TodoAPIService extends CoreAPIService {
  private readonly TODO_URL = '/todos';

  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Observable<ToDoDTO[]> {
    return this.http.get<ToDoDTO[]>(`${this.baseUrl}${this.TODO_URL}`);
  }
}
