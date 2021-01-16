import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacebookDataAnalysisComponent } from './facebook-data-analysis.component';

describe('FacebookDataAnalysisComponent', () => {
  let component: FacebookDataAnalysisComponent;
  let fixture: ComponentFixture<FacebookDataAnalysisComponent>;

  beforeEach(waitForAsync(() => {
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
