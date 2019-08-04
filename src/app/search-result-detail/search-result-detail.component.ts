import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result-detail',
  templateUrl: './search-result-detail.component.html',
  styleUrls: ['./search-result-detail.component.scss']
})
export class SearchResultDetailComponent implements OnInit {
  estate_list;
  selected_estate;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {
    this.estate_list = this.searchService.getSearchResult();
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
}
