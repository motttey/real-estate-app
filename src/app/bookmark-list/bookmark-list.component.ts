import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {
  bookmarked_estates;
  condition_model;
  p: number;

  constructor(
    private bookmarkService: BookmarkService,
    private searchService: SearchService,
  ) {
    this.bookmarked_estates = bookmarkService.getBookmarks();
    this.condition_model = searchService.getConditionModel();
    console.log(this.bookmarked_estates);
    this.p = 1;
  }

  ngOnInit() {
  }

  formSubmitHandler() {

  }

  removeElementHandler(estate){
    this.bookmarkService.deleteBookmark(estate);
  }
}
