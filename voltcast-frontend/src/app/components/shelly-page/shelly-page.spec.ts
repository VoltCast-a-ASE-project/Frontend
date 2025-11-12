import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellyPage } from './shelly-page';

describe('ShellyPage', () => {
  let component: ShellyPage;
  let fixture: ComponentFixture<ShellyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
