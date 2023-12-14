import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreAPIService {
  private readonly BASE_URL = environment.BASE_URL;

  get baseUrl(): string {
    return this.BASE_URL;
  }
}
