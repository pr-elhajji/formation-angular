import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// components
import { CommentsComponent } from './comments/comments.component';
import { ArticleComponent } from './article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './crud-article/add-article/add-article.component';
import {NotePageFoundComponent} from './note-page-found/note-page-found.component';
import { UpdateArticleComponent } from './crud-article/update-article/update-article.component';

/*const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};*/

const routes: Routes = [
  { path: 'home', component: ListArticleComponent},
  { path: 'article/:id', component: ArticleComponent},
  { path: 'add', component: AddArticleComponent},
  { path: 'article/update/:id', component: UpdateArticleComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '***', component: NotePageFoundComponent}

  // lazy loading
  // {path: '/comment/:id', component:CommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
