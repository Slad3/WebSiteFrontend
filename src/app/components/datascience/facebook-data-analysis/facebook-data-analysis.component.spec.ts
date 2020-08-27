import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookDataAnalysisComponent } from './facebook-data-analysis.component';

describe('FacebookDataAnalysisComponent', () => {
  let component: FacebookDataAnalysisComponent;
  let fixture: ComponentFixture<FacebookDataAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookDataAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
