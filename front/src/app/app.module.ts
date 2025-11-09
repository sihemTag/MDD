import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/components/register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { AuthInterceptor } from './pages/auth/services/auth.interceptor';
import { ArticlesComponent } from './pages/article/articles/articles.component';
import { ArticleFormComponent } from './pages/article/article-form/article-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './pages/article/list/list.component';
import { DetailComponent } from './pages/article/detail/detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AccountComponent } from './pages/auth/components/account/account.component';
import { CommentComponent } from './pages/comment/comment/comment.component';
import { ThemeComponent } from './pages/theme/theme/theme.component';
import { AbonnementComponent } from './pages/abonnement/abonnement/abonnement.component';
import { AuthInitService } from './services/authInitService';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RegisterComponent, MenuComponent, LoginComponent, ArticlesComponent, ArticleFormComponent, ListComponent, DetailComponent, AccountComponent, CommentComponent, ThemeComponent, AbonnementComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
              useClass: AuthInterceptor,
              multi: true},
              {
                provide: APP_INITIALIZER,
                useFactory: (authInit: AuthInitService) => () => authInit.init(),
                deps: [AuthInitService],
                multi: true
              }],
  bootstrap: [AppComponent],
})
export class AppModule {}
