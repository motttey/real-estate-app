import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { BookmarkService } from '../bookmark.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-result-detail',
  templateUrl: './search-result-detail.component.html',
  styleUrls: ['./search-result-detail.component.scss']
})
export class SearchResultDetailComponent implements OnInit, OnDestroy {
  estate_list;
  bookmarks;
  selected_estate;
  thumbnail_index: number;
  p: number;
  thumbnail_list: Object[];
  thumbnail_click_sequence: string[];
  model_update_api_path: string = "http://0.0.0.0:2019/api/update";

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private bookmarkService: BookmarkService,
    private http: HttpClient,
  ) {
    this.estate_list = this.searchService.getSearchResult();
    this.bookmarks = this.bookmarkService.getBookmarks();
    this.thumbnail_index = 0;
    this.thumbnail_click_sequence = [];
    this.thumbnail_list;
  }

  ngOnInit() {
    this.estate_list.subscribe(res => {
        this.route.paramMap.subscribe(params => {
          console.log(res)

          this.selected_estate = res.find((x) => {
              return (x.id === params.get('estateId'));
          });

          this.thumbnail_list = this.selected_estate.thumbnail_list;
        });
    });
  }

  ngOnDestroy(){
    console.log(this.thumbnail_click_sequence);
    this.sendClickSequenceToModel(this.thumbnail_click_sequence);
  }

  sendClickSequenceToModel(sequence_list){
    let obj = {}
    obj["value"] = sequence_list;

    this.http.post(this.model_update_api_path, JSON.stringify(obj)
    ).subscribe(
        response => {
            console.log(response);
            },
        error => {
            alert("API Failed");
        }
    );
  }

  clickEventHandler(thumbnail): void {
    this.thumbnail_index = this.thumbnail_list.indexOf(thumbnail);
    this.thumbnail_click_sequence.push(thumbnail.tag);
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
