import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-detailed-conditions',
  templateUrl: './detailed-conditions.component.html',
  styleUrls: ['./detailed-conditions.component.scss']
})
export class DetailedConditionsComponent implements OnInit, OnDestroy{

  constructor(
    private modalSearvice: ModalService
  ) {}

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

}
