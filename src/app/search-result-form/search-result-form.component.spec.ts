import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultFormComponent } from './search-result-form.component';

describe('SearchResultFormComponent', () => {
  let component: SearchResultFormComponent;
  let fixture: ComponentFixture<SearchResultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
