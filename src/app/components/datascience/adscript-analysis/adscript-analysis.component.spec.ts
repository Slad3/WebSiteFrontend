import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADScriptAnalysisComponent } from './adscript-analysis.component';

describe('ADScriptAnalysisComponent', () => {
  let component: ADScriptAnalysisComponent;
  let fixture: ComponentFixture<ADScriptAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADScriptAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADScriptAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
