import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeToggleButtonComponent } from './dark-mode-toggle-button.component';

describe('DarkModeToggleButtonComponent', () => {
  let component: DarkModeToggleButtonComponent;
  let fixture: ComponentFixture<DarkModeToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkModeToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkModeToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
