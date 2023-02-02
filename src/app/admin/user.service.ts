import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserData } from "../login/userdata.model";

@Injectable()
export class UserService{
    private baseUrl: string = "";

    constructor(private http: HttpClient){
        this.baseUrl = `${environment.urlApiRoot}user`;
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