import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcarouselComponent } from './bootcarousel.component';

describe('BootcarouselComponent', () => {
  let component: BootcarouselComponent;
  let fixture: ComponentFixture<BootcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
