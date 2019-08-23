import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ModalService } from '../modal.service';
import { SearchService } from '../search.service';

import * as user_options from '../user_options';

@Component({
  selector: 'app-detailed-conditions',
  templateUrl: './detailed-conditions.component.html',
  styleUrls: ['./detailed-conditions.component.scss']
})
export class DetailedConditionsComponent implements OnInit, OnDestroy{
  condition_model;

  bus_toilet_options = user_options.bus_toilet_options;
  kitchen_options = user_options.kitchen_options;
  security_options = user_options.security_options;
  position_options = user_options.position_options;
  other_options = user_options.other_options;
  parking_options = user_options.parking_options;
  surrounding_environment_options = user_options.surrounding_environment_options;

  constructor(
    private modalSearvice: ModalService,
    private searchService: SearchService,

    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.condition_model = searchService.getConditionModel();
  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

  public onClick($event){
    this.notifyCloseModal();
  }

  private notifyCloseModal(){
    this.modalSearvice.requestCloseModal();
  }

  private checkbox_changed(items) {
    let new_selected_items: string[] = [];
    new_selected_items = items.filter(f => f.selected === true).map(function(v) { return v.name; });
    return new_selected_items;
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
