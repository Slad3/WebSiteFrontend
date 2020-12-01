import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheOfficeScriptAnalyzerComponent } from './the-office-script-analyzer.component';

describe('TheOfficeScriptAnalyzerComponent', () => {
  let component: TheOfficeScriptAnalyzerComponent;
  let fixture: ComponentFixture<TheOfficeScriptAnalyzerComponent>;

  beforeEach(async(() => {
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
