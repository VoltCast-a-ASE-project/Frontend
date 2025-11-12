import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellyAddConfig } from './shelly-add-config';

describe('ShellyAddConfig', () => {
  let component: ShellyAddConfig;
  let fixture: ComponentFixture<ShellyAddConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellyAddConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellyAddConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
