import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartFormComponent } from './start-form/start-form.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { SearchResultFormComponent } from './search-result-form/search-result-form.component';
import { SearchResultDetailComponent } from './search-result-detail/search-result-detail.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    StartFormComponent,
    SearchResultListComponent,
    SearchResultFormComponent,
    SearchResultDetailComponent,
    BookmarkListComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: StartFormComponent },
      { path: 'result', component: SearchResultComponent },
      { path: 'result/detail', component: SearchResultDetailComponent },
      { path: 'bookmark', component: BookmarkListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
