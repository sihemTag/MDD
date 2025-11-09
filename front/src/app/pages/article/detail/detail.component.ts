import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'src/app/interfaces/article';
import { CommentService } from '../../comment/comment.service';
import { CommentRequest } from '../../comment/commentRequest';
import { CommentComponent } from '../../comment/comment/comment.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  comment: string = '';
  @ViewChild(CommentComponent) commentComponent!: CommentComponent;


  constructor(@Inject(MAT_DIALOG_DATA) public article: Article, 
            private commentService:CommentService,
            ) {}

  ngOnInit(): void {
  }

  sendComment(comment: string, articleId:number, userId:number) {
    const newComment: CommentRequest = {
      comment: comment,
      artical_id: articleId,
      user_id: userId
    }
    this.commentService.addComment(newComment).subscribe({
      next: (res) => {
        this.comment = '';
        this.commentComponent.loadComments();
      },
      error: (err) => {
        alert("message not sent")
      } 
    });
  }

}
