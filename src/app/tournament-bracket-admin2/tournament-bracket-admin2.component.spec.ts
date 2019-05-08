import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentBracketAdmin2Component } from './tournament-bracket-admin2.component';

describe('TournamentBracketAdmin2Component', () => {
  let component: TournamentBracketAdmin2Component;
  let fixture: ComponentFixture<TournamentBracketAdmin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentBracketAdmin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentBracketAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
