import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatascienceHomeComponent } from './datascience-home.component';

describe('DatascienceHomeComponent', () => {
  let component: DatascienceHomeComponent;
  let fixture: ComponentFixture<DatascienceHomeComponent>;

  beforeEach(waitForAsync(() => {
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
