import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonetaskComponent } from './donetask.component';

describe('DonetaskComponent', () => {
  let component: DonetaskComponent;
  let fixture: ComponentFixture<DonetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
