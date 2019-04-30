import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTournamentsManagementComponent } from './cards-tournaments-management.component';

describe('CardsTournamentsManagementComponent', () => {
  let component: CardsTournamentsManagementComponent;
  let fixture: ComponentFixture<CardsTournamentsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsTournamentsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsTournamentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
