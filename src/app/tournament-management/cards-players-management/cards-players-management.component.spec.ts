import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPlayersManagementComponent } from './cards-players-management.component';

describe('CardsPlayersManagementComponent', () => {
  let component: CardsPlayersManagementComponent;
  let fixture: ComponentFixture<CardsPlayersManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPlayersManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPlayersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
