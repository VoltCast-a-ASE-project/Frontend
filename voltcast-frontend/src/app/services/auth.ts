import { Injectable } from '@angular/core';
import {ApiService} from '../services/api';
import {HttpMethod} from '../services/http-method.enum';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

/**
 * Service das beim Ändern der URL bzw beim Routing auf eine andere Seite prüft, ob ein valider JWT Token vorhanden ist.
 */
export class AuthService{}
/*
export class AuthService implements CanActivate {
  constructor(private apiService: ApiService) {}


  canActivate(): Promise<boolean> {
    return this.apiService.sendRequest<any>(HttpMethod.GET, "/auth").then(
      async (response) => {
        return true;
      },
      (error) => {
        return false;
      }
    )
      .catch(error => {
        return false;
      });
  }
}
  */