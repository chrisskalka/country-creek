import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ContactService {
    private baseUrl: string = "";

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.urlApiRoot}contact`;
    }

    getContactInfo(): Observable<string> {
        return this.http.get<string>(`${this.baseUrl}`);
    }

    saveContactInfo(contactInfo: string): Observable<boolean> {
        return this.http.post<boolean>(this.baseUrl, { data: contactInfo });
    }

}