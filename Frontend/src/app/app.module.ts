import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Добавлен импорт FormsModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { Article1DetailComponent } from './article-list/article1-detail/article1-detail.component';
import { Article2DetailComponent } from './article-list/article2-detail/article2-detail.component';
import { Article3DetailComponent } from './article-list/article3-detail/article3-detail.component';
import { Article4DetailComponent } from './article-list/article4-detail/article4-detail.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { YourApiService } from './your-api.service';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: 'Article1', component: Article1DetailComponent },
  { path: 'Article2', component: Article2DetailComponent },
  { path: 'Article3', component: Article3DetailComponent },
  { path: 'Article4', component: Article4DetailComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'Register', component: RegisterPageComponent },
  { path: 'Admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: 'Articles', pathMatch: 'full' },
  { path: '', component: ArticleListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleListComponent,
    Article1DetailComponent,
    Article2DetailComponent,
    Article3DetailComponent,
    Article4DetailComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [YourApiService, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
