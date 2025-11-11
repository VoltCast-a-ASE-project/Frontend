import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shelly } from './shelly';

describe('Shelly', () => {
  let component: Shelly;
  let fixture: ComponentFixture<Shelly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shelly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shelly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
