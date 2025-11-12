import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellyItem } from './shelly-item';

describe('ShellyItem', () => {
  let component: ShellyItem;
  let fixture: ComponentFixture<ShellyItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellyItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellyItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
