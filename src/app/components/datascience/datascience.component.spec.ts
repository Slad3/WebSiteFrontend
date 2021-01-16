import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatascienceComponent } from './datascience.component';

describe('DatascienceComponent', () => {
  let component: DatascienceComponent;
  let fixture: ComponentFixture<DatascienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatascienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatascienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
