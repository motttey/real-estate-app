import { Component, EventEmitter, OnInit, ChangeDetectorRef} from '@angular/core';
import { Estate_Condition }    from '../estate_condition';
import { SearchService } from '../search.service';
import * as user_options from '../user_options';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {
  condition_model;
  structures = user_options.structures;
  rent_options = user_options.rent_options;
  room_types = user_options.room_types;
  distance_options = user_options.distance_options;
  age_options = user_options.age_options;

  bus_toilet_options = user_options.bus_toilet_options;
  kitchen_options = user_options.kitchen_options;
  security_options = user_options.security_options;
  position_options = user_options.position_options;
  other_options = user_options.other_options;
  parking_options = user_options.parking_options;
  surrounding_environment_options = user_options.surrounding_environment_options;

  rent_min_options = user_options.rent_min_options;
  rent_max_options = user_options.rent_max_options;
  area_min_options = user_options.area_min_options;
  area_max_options = user_options.area_max_options;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private searchService: SearchService,
  ) {
    this.condition_model = searchService.getConditionModel();
  }

  ngOnInit() {
  }

  onSubmit(){
  }

  formSubmitHandler() {
    this.searchService.setConditionModel(this.condition_model);
  }

  select_area_min(area_min): void {
    this.condition_model.area_min = parseInt(area_min, 10);
  }

  select_area_max(area_max): void {
    this.condition_model.area_max = parseInt(area_max, 10);
  }

  select_rent_min(rent_min): void {
    this.condition_model.rent_min = parseInt(rent_min, 10);
  }

  select_rent_max(rent_max): void {
    this.condition_model.rent_max = parseInt(rent_max, 10);
  }

  age_selection_change(age_option): void {
    this.condition_model.age = age_option.name;
  }

  distance_selection_change(distance_option): void {
    this.condition_model.distance = distance_option.name;
  }

  checkbox_changed(items) {
    let new_selected_items: string[] = [];
    new_selected_items = items.filter(f => f.selected === true).map(function(v) { return v.name; });
    return new_selected_items;
  }

  structure_changed(floor_plan) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.structures = this.checkbox_changed(this.structures);
  }

  rent_option_changed(rent_option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.rent_options = this.checkbox_changed(this.rent_options);
  }

  room_type_changed(room_type) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.room_types = this.checkbox_changed(this.room_types);
  }

  position_options_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.position_options = this.checkbox_changed(this.position_options);
  }

  kitchen_options_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.kitchen_options = this.checkbox_changed(this.kitchen_options);
  }

  bus_toilet_option_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.bus_toilet_options = this.checkbox_changed(this.bus_toilet_options);
  }

  parking_options_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.parking_options = this.checkbox_changed(this.parking_options);
  }

  surrounding_environment_options_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.surrounding_environment_options = this.checkbox_changed(this.surrounding_environment_options);
  }

  other_options_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.other_options = this.checkbox_changed(this.other_options);
  }
}
