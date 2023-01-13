import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Events } from "./events.model";

@Injectable()
export class EventsService{
    private baseUrl: string = "";

    constructor(private http: HttpClient){
        this.baseUrl = `${environment.urlApiRoot}events`;
    }

    getEvents(): Observable<Events[]>{
        return this.http.get<Events[]>(`${this.baseUrl}`);
    }
}