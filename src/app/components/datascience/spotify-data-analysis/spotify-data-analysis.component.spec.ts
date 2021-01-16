import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyDataAnalysisComponent } from './spotify-data-analysis.component';

describe('SpotifyDataAnalysisComponent', () => {
  let component: SpotifyDataAnalysisComponent;
  let fixture: ComponentFixture<SpotifyDataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyDataAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
