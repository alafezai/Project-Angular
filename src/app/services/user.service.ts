import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
  _id:'',
    name: '',
    email: '',
    password: '',
    role:''
  };
 
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials:any) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
    
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }



  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`);
  }
  getUser(_id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${_id}`);
  }


  updateUser(_id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseURL}/${_id}`, value);
  }

  deleteUser(_id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${_id}`, { responseType: 'text' });
  }

  public doRegistration(user: User) {
    return this.http.post(`${this.baseURL}`, user, {responseType:'text' as 'json'})
  }


}
