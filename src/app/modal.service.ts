import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // データ変更を通知
  private closeEventSubject = new Subject<string>();
  public closeEventObservable$ = this.closeEventSubject.asObservable();

  constructor() {

  }

  public requestCloseModal() {
    this.closeEventSubject.next();
  }
}
