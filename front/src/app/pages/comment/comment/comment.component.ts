import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = [];
  @Input() articleId: number =0;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComments();
    
  }

  public loadComments() {
    this.commentService.getCommentsByArticle(this.articleId).subscribe({
      next: (list) => {
        this.comments = list;
      }
    });

  }

}
