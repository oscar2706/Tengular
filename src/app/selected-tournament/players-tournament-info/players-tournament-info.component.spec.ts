import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTournamentInfoComponent } from './players-tournament-info.component';

describe('PlayersTournamentInfoComponent', () => {
  let component: PlayersTournamentInfoComponent;
  let fixture: ComponentFixture<PlayersTournamentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersTournamentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTournamentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
