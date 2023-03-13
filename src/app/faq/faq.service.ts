import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question } from "./faq.model";

@Injectable()
export class FaqService {
    private baseUrl: string = "";

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.urlApiRoot}faq`;
    }

    getFaqs(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}`);
    }

    saveFaqs(faqs: Question[]): Observable<boolean> {
        return this.http.post<boolean>(this.baseUrl, faqs);
    }

    deleteFaq(id: Number): Observable<null> {
        return this.http.delete<null>(this.baseUrl + "/" + id);
    }
}