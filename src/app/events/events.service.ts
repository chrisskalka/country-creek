import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event } from "./events.model";

@Injectable()
export class EventsService{
    private baseUrl: string = "";

    constructor(private http: HttpClient){
        this.baseUrl = `${environment.urlApiRoot}events`;
    }

    getEvents(): Observable<any[]>{
        return this.http.get<any[]>(`${this.baseUrl}`);
    }

    saveEvents(events: Event[]): Observable<boolean>{
        return this.http.post<boolean>(this.baseUrl, events);
    }

    deleteEvent(id: Number): Observable<null>{
        return this.http.delete<null>(this.baseUrl + "/" + id);
    }
}