import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceHomeComponent } from './datascience-home.component';

describe('DatascienceHomeComponent', () => {
  let component: DatascienceHomeComponent;
  let fixture: ComponentFixture<DatascienceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatascienceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatascienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
