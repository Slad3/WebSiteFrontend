import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstagramDataAnalysisComponent } from './instagram-data-analysis.component';

describe('InstagramDataAnalysisComponent', () => {
  let component: InstagramDataAnalysisComponent;
  let fixture: ComponentFixture<InstagramDataAnalysisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramDataAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
