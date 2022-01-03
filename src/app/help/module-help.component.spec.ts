import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleHelpComponent } from './module-help.component';

describe('ModuleHelpComponent', () => {
  let component: ModuleHelpComponent;
  let fixture: ComponentFixture<ModuleHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
