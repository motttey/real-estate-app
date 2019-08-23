import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailedConditionsComponent } from '../detailed-conditions/detailed-conditions.component';

import { Estate_Condition }    from '../estate_condition';
import { SearchService } from '../search.service';
import { ModalService } from '../modal.service';

import * as user_options from '../user_options';

@Component({
  selector: 'app-search-result-form',
  templateUrl: './search-result-form.component.html',
  styleUrls: ['./search-result-form.component.scss']
})
export class SearchResultFormComponent implements OnInit, OnDestroy {
  condition_model;
  structures = user_options.structures;
  rent_options = user_options.rent_options;
  room_types = user_options.room_types;

  distance_options = user_options.distance_options;
  age_options = user_options.age_options;
  rent_min_options = user_options.rent_min_options;
  rent_max_options = user_options.rent_max_options;
  area_min_options = user_options.area_min_options;
  area_max_options = user_options.area_max_options;

  // 閉じたイベントを通知
  private subscription: Subscription;
  // ngComponentOutletにセットするプロパティ
  public modal: any = null;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private searchService: SearchService,
    private modalService: ModalService,
  ) {
    this.condition_model = searchService.getConditionModel();
  }

  ngOnInit() {
    this.subscription = this.modalService.closeEventObservable$.subscribe(
      () => {
        this.modal = null;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openModal($event){
    this.setModal();
  }

  private setModal(){
    this.modal = DetailedConditionsComponent;
  }

  formSubmitHandler() {
    this.searchService.setConditionModel(this.condition_model);
    console.log(this.condition_model);
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

  select_distance_option(distance_option): void {
    this.condition_model.distance = distance_option;
  }

  select_age_option(age_option): void {
    this.condition_model.age = age_option;
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


}
