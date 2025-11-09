import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/components/register/register/register.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { ArticlesComponent } from './pages/article/articles/articles.component';
import { AccountComponent } from './pages/auth/components/account/account.component';
import { ThemeComponent } from './pages/theme/theme/theme.component';
import { AbonnementComponent } from './pages/abonnement/abonnement/abonnement.component';
import { AuthGuard } from './guards/auth-guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path: 'articles', canActivate: [AuthGuard], component: ArticlesComponent},
  {path: 'account', canActivate: [AuthGuard], component:AccountComponent},
  {path: 'themes', canActivate: [AuthGuard], component:ThemeComponent},
  {path: 'abonnements', canActivate: [AuthGuard], component:AbonnementComponent},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
