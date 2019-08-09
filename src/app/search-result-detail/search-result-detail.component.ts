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
  thumbnail_index: number;
  p: number;
  thumbnail_list: string[];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private bookmarkService: BookmarkService,
  ) {
    this.estate_list = this.searchService.getSearchResult();
    this.bookmarks = this.bookmarkService.getBookmarks();
    this.p = 1;
    this.thumbnail_index = 3;
    this.thumbnail_list = [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/07/26/18/30/kitchen-1543493_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/08/15/20/53/bad-3609070_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_960_720.jpg",
    ]
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

  clickEventHandler(thumbnail: string): void {
    this.thumbnail_index = this.thumbnail_list.indexOf(thumbnail);
  }

  getPrevIndex(): void{
    if (this.thumbnail_index > 0) this.thumbnail_index--;
  }

  getNextIndex(): void{
    if (this.thumbnail_index < this.thumbnail_list.length - 1) this.thumbnail_index++;
  }

  formSubmitHandler(selected_estate): void{
    if (this.bookmarks.findIndex(x => x.id === selected_estate.id) < 0) {
      this.bookmarkService.addBookmark(selected_estate);
      alert("ブックマークに登録しました. ");
    }
    else
      alert("既に登録されています. ");
  }
}
