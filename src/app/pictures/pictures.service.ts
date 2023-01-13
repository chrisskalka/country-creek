import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pictures } from "./pictures.model";

@Injectable()
export class PicturesService{
    private baseUrl: string = "";

    constructor(private http: HttpClient){
        this.baseUrl = `${environment.urlApiRoot}picture`;
    }

    getPictures(): Observable<Pictures[]>{
        return this.http.get<Pictures[]>(`${this.baseUrl}`);
    }
}