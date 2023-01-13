import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Picture } from "./pictures.model";

@Injectable()
export class PicturesService {
    private baseUrl: string = "";

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.urlApiRoot}picture`;
    }

    getPictures(): Observable<Picture[]> {
        return this.http.get<Picture[]>(`${this.baseUrl}`);
    }

    savePictures(pictures: Picture[]): Observable<null> {
        return this.http.post<null>(this.baseUrl, pictures);
    }

    deletePicture(id: number): Observable<null> {
        return this.http.delete<null>(this.baseUrl + "/" + id);
    }
}
