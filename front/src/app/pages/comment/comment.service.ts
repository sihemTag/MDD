import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comment } from "src/app/interfaces/comment";
import { environment } from "src/environments/environment";
import { CommentRequest } from "./commentRequest";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(private httpClient: HttpClient) { }

    public getCommentsByArticle(id: number): Observable<Comment[]> {
        return this.httpClient.get<Comment[]>(`${environment.baseUrl}/comments/${id}`);
    }

    public addComment(request: CommentRequest): Observable<{message: string}> {
        return this.httpClient.post<{message:string}>(`${environment.baseUrl}/comments`,request);
    }

}