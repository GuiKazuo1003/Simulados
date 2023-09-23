import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoBDComponent } from './simulado-bd.component';

describe('SimuladoBDComponent', () => {
  let component: SimuladoBDComponent;
  let fixture: ComponentFixture<SimuladoBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladoBDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladoBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
