import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estate_Condition }    from './estate_condition';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  condition_model = new Estate_Condition("none", "none", [], [], []);

  constructor(
    private http: HttpClient
  ) { }

  getConditionModel(){
    return this.condition_model;
  }

  setConditionModel(new_model){
    // validation
    this.condition_model = new_model;
  }

  getSearchResult() {
    return this.http.get('/assets/result.json');
  }
}
