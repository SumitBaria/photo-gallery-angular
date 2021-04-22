import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Photos} from '../Models/photos';
import {catchError} from 'rxjs/operators';

const apiUrl = 'http://127.0.0.1:9000/home'
const authUrl = 'http://127.0.0.1:9000/home/auth'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.httpClient.get(apiUrl);
  }
  postUser(payload: Object){
    return this.httpClient.post(apiUrl,payload);
  }
  authUser(payload: Object){
    return this.httpClient.post(authUrl,payload);
  }
  updateUser(payload: Object){
    return this.httpClient.patch(apiUrl,payload);
  }
  deleteuser(payload: Object){
    return this.httpClient.delete(apiUrl,payload);
  }
}
