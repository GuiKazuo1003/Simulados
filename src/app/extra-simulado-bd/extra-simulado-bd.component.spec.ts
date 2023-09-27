import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSimuladoBDComponent } from './extra-simulado-bd.component';

describe('ExtraSimuladoBDComponent', () => {
  let component: ExtraSimuladoBDComponent;
  let fixture: ComponentFixture<ExtraSimuladoBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSimuladoBDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraSimuladoBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
