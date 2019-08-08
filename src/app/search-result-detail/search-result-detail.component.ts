import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-search-result-detail',
  templateUrl: './search-result-detail.component.html',
  styleUrls: ['./search-result-detail.component.scss']
})
export class SearchResultDetailComponent implements OnInit {
  estate_list;
  bookmarks;
  selected_estate;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private bookmarkService: BookmarkService,
  ) {
    this.estate_list = this.searchService.getSearchResult();
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  ngOnInit() {
    this.estate_list .subscribe(res => {
        this.route.paramMap.subscribe(params => {
          console.log(res)

          this.selected_estate = res.find((x) => {
              return (x.id === params.get('estateId'));
          });
        });
    });
  }

<<<<<<< HEAD
  formSubmitHandler(selected_estate) {
    if (this.bookmarks.findIndex(x => x.id === selected_estate.id) < 0) {
      this.bookmarkService.addBookmark(selected_estate);
      alert("ブックマークに登録しました. ");
    }
    else
      alert("既に登録されています. ");
=======
  formSubmitHandler () {
    alert("ブックマークに追加しました")
>>>>>>> d4cd43aa5508bf22c13eb6ef257770e91c8fadb5
  }
}
