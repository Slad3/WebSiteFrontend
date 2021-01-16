import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TheOfficeScriptAnalyzerComponent } from './the-office-script-analyzer.component';

describe('TheOfficeScriptAnalyzerComponent', () => {
  let component: TheOfficeScriptAnalyzerComponent;
  let fixture: ComponentFixture<TheOfficeScriptAnalyzerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheOfficeScriptAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheOfficeScriptAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
