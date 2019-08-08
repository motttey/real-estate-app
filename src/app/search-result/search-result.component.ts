import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  estates;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.estates = this.searchService.getSearchResult();
  }
}
