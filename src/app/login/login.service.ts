import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
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

    getUsers(): Observable<any[]>{
        return this.http.get<any[]>(this.baseUrl);
    }

    newUser(userData: UserData): Observable<HttpResponse<Object>>{
        return this.http.post(this.baseUrl + "/NewUser", userData, {observe: 'response'});
    }

    deleteUser(userId: number): Observable<HttpResponse<Object>>{
        return this.http.delete(`${this.baseUrl}/${userId}`, {observe: 'response'});
    }
}