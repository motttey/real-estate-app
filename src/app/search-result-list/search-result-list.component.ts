import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  estates;

  constructor(
    private searchService: SearchService
  ) {
    this.estates = this.searchService.getSearchResult();
  }

  ngOnInit() {
  }

}
