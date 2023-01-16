import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserData } from "./userdata.model";

@Injectable()
export class LoginService{
    private baseUrl: string = "";

    constructor(private http: HttpClient){
        this.baseUrl = `${environment.urlApiRoot}login`;
    }

    login(login: UserData): Observable<any>{
        return this.http.post(this.baseUrl, login, { observe: 'response' });
    }

    getUsers(): Observable<UserData[]>{
        return this.http.get<UserData[]>(this.baseUrl);
    }
}