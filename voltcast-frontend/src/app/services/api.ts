import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { HttpMethod } from './http-method.enum';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //base url to API Gateway
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * sends a request to the server according to the specified method
   * @param method represents the Method of the HTTP Request e.g. GET,POST etc.
   * @param endpoint specifies the route/endpoint to the server
   * @param body additional parameters to send with POST, PUT and PATCH
   * @returns Promise, where the response from the API can be retrieved from
   */
  /*
  sendRequest<T>(method: HttpMethod, endpoint: string, body?: Object): Promise<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {headers: headers, withCredentials: true};
    switch (method) {
        case HttpMethod.GET:
            let responseGET = lastValueFrom(this.http.get<T>(`${this.apiUrl}${endpoint}`, options));
            if(!this.checkAuthToken(responseGET)) return Promise.reject(responseGET);
            return responseGET;
        case HttpMethod.POST:
            let responsePOST = lastValueFrom(this.http.post<T>(`${this.apiUrl}${endpoint}`, body, options));
            if(!this.checkAuthToken(responsePOST)) return Promise.reject(responsePOST);
            return responsePOST;
        case HttpMethod.PUT:
            let responsePUT = lastValueFrom(this.http.put<T>(`${this.apiUrl}${endpoint}`, body, options));
            if(!this.checkAuthToken(responsePUT)) return Promise.reject(responsePUT);
            return responsePUT;
        case HttpMethod.PATCH:
            let responsePATCH = lastValueFrom(this.http.patch<T>(`${this.apiUrl}${endpoint}`, body, options));
            if(!this.checkAuthToken(responsePATCH)) return Promise.reject(responsePATCH);
            return responsePATCH;
        case HttpMethod.DELETE:
            let responseDELETE = lastValueFrom(this.http.delete<T>(`${this.apiUrl}${endpoint}`, options));
            if(!this.checkAuthToken(responseDELETE)) return Promise.reject(responseDELETE);
            return responseDELETE;
        default:
          console.log(`Unsupported HTTP method: ${method}`);
          return Promise.reject({ message: `Unsupported HTTP method: ${method}` });
    }
  }
  */

    sendRequest<T>(method: HttpMethod, endpoint: string, body?: Object): Promise<T> {
    const headers = new HttpHeaders().set('Content-Type', 'text');
    const options = {headers:headers};
    switch (method) {
        case HttpMethod.GET:
            let responseGET = lastValueFrom(this.http.get<T>(`${this.apiUrl}${endpoint}`, options));
            return responseGET;
        case HttpMethod.POST:
            let responsePOST = lastValueFrom(this.http.post<T>(`${this.apiUrl}${endpoint}`, body, options));
            return responsePOST;
        case HttpMethod.PUT:
            let responsePUT = lastValueFrom(this.http.put<T>(`${this.apiUrl}${endpoint}`, body, options));
            return responsePUT;
        case HttpMethod.PATCH:
            let responsePATCH = lastValueFrom(this.http.patch<T>(`${this.apiUrl}${endpoint}`, body, options));
            return responsePATCH;
        case HttpMethod.DELETE:
            let responseDELETE = lastValueFrom(this.http.delete<T>(`${this.apiUrl}${endpoint}`, options));
            return responseDELETE;
        default:
          console.log(`Unsupported HTTP method: ${method}`);
          return Promise.reject({ message: `Unsupported HTTP method: ${method}` });
    }
  }

  private async checkAuthToken(response: Promise<any>): Promise<boolean> {
    response.then(
      async (response) => {
        return true;
      },
      (error) => {
          if (error.status === 401 && error.statusText == "Unauthorized") {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }
      )
      .catch((error) => {
        this.router.navigate(['/login']);
        return false;
      })
    return false;
  }

}
