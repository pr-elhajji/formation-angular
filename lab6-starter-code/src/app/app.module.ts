import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// les composants
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ArticleComponent } from './article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';

import { AppRoutingModule} from './AppRoutingModule'; // module de route
// import { ArticlesLocalService } from './services/articles-local.service';
import { ArticlesService } from './services/articles.service';

import { NotePageFoundComponent } from './note-page-found/note-page-found.component';
import { CommentFormTemplateComponent } from './comment-form-template/comment-form-template.component';
import { AddArticleComponent } from './crud-article/add-article/add-article.component';
import { UpdateArticleComponent } from './crud-article/update-article/update-article.component'; // importer le service

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ArticleComponent,
    ListArticleComponent,
    NotePageFoundComponent,
    CommentFormTemplateComponent,
    AddArticleComponent,
    UpdateArticleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [/*ArticlesLocalService,*/ ArticlesService],  // ajouter le service au module
  bootstrap: [AppComponent]
})
export class AppModule { }
