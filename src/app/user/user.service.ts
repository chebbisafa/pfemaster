import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getAlluserdetails(){
    return this.http.get('http://localhost:3000/api/Allusers').map((response: Response) => response.json());
  }
}
