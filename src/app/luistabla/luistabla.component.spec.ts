import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuistablaComponent } from './luistabla.component';

describe('LuistablaComponent', () => {
  let component: LuistablaComponent;
  let fixture: ComponentFixture<LuistablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuistablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuistablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
