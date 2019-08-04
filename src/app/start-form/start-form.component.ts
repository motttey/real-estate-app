import { Component, EventEmitter, OnInit, ChangeDetectorRef} from '@angular/core';
import { Estate_Condition }    from '../estate_condition';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {
  condition_model;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private searchService: SearchService,
  ) {
    this.condition_model = searchService.getConditionModel();
  }

  floor_plans = [
    {name: 'none', selected: false},
    {name: 'mokuzou', selected: false},
    {name: 'block', selected: false},
    {name: 'tekkotsu', selected: false}
  ];

  ngOnInit() {
  }

  onSubmit(){
  }

  formSubmitHandler() {
    this.searchService.setConditionModel(this.condition_model);
  }

  checkbox_changed(floor_plan) {
    let new_floor_plans: string[] = [];

    this.changeDetectorRef.detectChanges();
    new_floor_plans = this.floor_plans.filter(f => f.selected === true).map(function(v) { return v.name; });
    this.condition_model.floor_plans = new_floor_plans;
  }
}
