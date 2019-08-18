import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ModalService } from '../modal.service';
import { SearchService } from '../search.service';

import { options, bus_toilet_options} from '../user_options';

@Component({
  selector: 'app-detailed-conditions',
  templateUrl: './detailed-conditions.component.html',
  styleUrls: ['./detailed-conditions.component.scss']
})
export class DetailedConditionsComponent implements OnInit, OnDestroy{
  condition_model;
  options = options;
  bus_toilet_options = bus_toilet_options;

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

  option_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.options = this.checkbox_changed(this.options);
  }

  bus_toilet_option_changed(option) {
    this.changeDetectorRef.detectChanges();
    this.condition_model.bus_toilet_options = this.checkbox_changed(this.bus_toilet_options);
  }

}
