import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Theme } from "src/app/interfaces/theme";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor(private httpClient: HttpClient) { }

    public getAllThemes(): Observable<Theme[]> {
        return this.httpClient.get<Theme[]>(`${environment.baseUrl}/themes`);
    }

}