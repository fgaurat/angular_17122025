import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncComponent } from './inc-component';

describe('IncComponent', () => {
  let component: IncComponent;
  let fixture: ComponentFixture<IncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
