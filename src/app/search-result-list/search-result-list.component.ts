import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  estates;
  condition_model;
  selected_estate;
  bookmarks;
  p: number;

  constructor(
    private searchService: SearchService,
    private bookmarkService: BookmarkService
  ) {
    this.estates = this.searchService.getSearchResult();
    this.condition_model = searchService.getConditionModel();
    this.bookmarks = this.bookmarkService.getBookmarks();
    this.p = 1;
    console.log(this.condition_model);
  }

  ngOnInit() {
  }

  formSubmitHandler(selected_estate) {
    console.log(selected_estate);
    if (this.bookmarks.findIndex(x => x.id === selected_estate.id) < 0) {
      this.bookmarkService.addBookmark(selected_estate);
      console.log(this.bookmarks);

      alert("ブックマークに登録しました. ");
    }
    else
      alert("既に登録されています. ");
  }
}
