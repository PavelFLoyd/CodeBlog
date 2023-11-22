import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { Article1DetailComponent } from './article-list/article1-detail/article1-detail.component';
import { Article2DetailComponent } from './article-list/article2-detail/article2-detail.component';
import { Article3DetailComponent } from './article-list/article3-detail/article3-detail.component';
import { Article4DetailComponent } from './article-list/article4-detail/article4-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'Articles', pathMatch: 'full' },
  { path: '', component: ArticleListComponent },
  { path: 'Article1', component: Article1DetailComponent },
  { path: 'Article2', component: Article2DetailComponent },
  { path: 'Article3', component: Article3DetailComponent },
  { path: 'Article4', component: Article4DetailComponent },
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
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
