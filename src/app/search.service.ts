import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estate_Condition }    from './estate_condition';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  condition_model = new Estate_Condition(0, 0, 0, 0, "none", "none", [], [], [], [], [], [], [], [], []);
  search_api_path: string = "http://0.0.0.0:3030/api/search";

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

  submitUserFeedback(feedback_model) {

  }

  getSearchResult() {
    /*
    this.http.post(this.search_api_path, this.condition_model
    ).subscribe(
        response => {
              let search_result_object = response;
            },
        error => {
            alert("API Failed");
        }
    );
    */

    return this.http.get('/assets/result2.json');
  }
}
