import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaComponentComponent } from './prijava-component.component';

describe('PrijavaComponentComponent', () => {
  let component: PrijavaComponentComponent;
  let fixture: ComponentFixture<PrijavaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
