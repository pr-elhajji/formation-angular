import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// TODO Importer import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// les composants
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ArticleComponent } from './article/article.component';
//import { ListArticleComponent } from './list-article/list-article.component';

//import { AppRoutingModule} from './AppRoutingModule'; // module de route
//import { ArticlesService } from './services/articles.service';
import { NotePageFoundComponent } from './note-page-found/note-page-found.component'; // importer le service

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ArticleComponent,
    ListArticleComponent,
    NotePageFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArticlesService],  // ajouter le service au module
  bootstrap: [AppComponent]
})
export class AppModule { }
