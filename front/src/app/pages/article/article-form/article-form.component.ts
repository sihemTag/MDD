import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Output() closeForm = new EventEmitter<void>();

  articleForm!: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: [''],
    });
  }

  submit() {
    if (this.articleForm.valid) {
      //this.closeForm.emit();
      const formData = new FormData();
      formData.append('title', this.articleForm.get('title')?.value);
      formData.append('description', this.articleForm.get('description')?.value);

      this.articleService.create(formData).subscribe({
        next: (response) => {
          console.log('Article created successfully:', response);
          this.close();
        },
        error: (error) => {
          console.error('Error creating article:', error);
        }
      });
    } else {
      this.articleForm.markAllAsTouched();
    }
  }

  close() {
    this.closeForm.emit();
  } 

}
