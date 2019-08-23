import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailedConditionsComponent } from './detailed-conditions.component';

describe('DetailedConditionsComponent', () => {
  let component: DetailedConditionsComponent;
  let fixture: ComponentFixture<DetailedConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
