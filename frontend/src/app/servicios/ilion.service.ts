import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ilionService {

  serverUrlLogin = 'https://serviciolan.azurewebsites.net/api/login';
  serverUrlUsuario = 'http://serviciolan.azurewebsites.net/api/usuario'

  
  constructor(public http: HttpClient) { }

  getLogin(email: string,contraseña: string) {
    console.log(`${this.serverUrlLogin}?email=${email}&contraseña=${contraseña}`);
    return this.http.get(`${this.serverUrlLogin}?email=${email}&contraseña=${contraseña}`).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
        );
  }

  setUsuario(data: any) {
    return this.http.post(this.serverUrlUsuario, data);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.serverUrlUsuario}/${id}`);
  }

  putUsuario(data: any) {
    console.log(data);
    return this.http.put(this.serverUrlUsuario, data);
  }

  deleteUsuario(id: string) {
    console.log(`${this.serverUrlUsuario}/${id}`);
    return this.http.delete(`${this.serverUrlUsuario}/${id}`);
  }
  

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is:   ${err.message}`;
      // tslint:disable-next-line:align
    } console.log(errorMessage);
    return throwError(errorMessage);
  }
}