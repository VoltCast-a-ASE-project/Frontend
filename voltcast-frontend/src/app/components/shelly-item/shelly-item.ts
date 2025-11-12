import { Component, Input, OnInit } from '@angular/core';
import { ShellyDevice } from '../../models/shellyDevice.model';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-shelly-item',
  imports: [ MatSlideToggle],
  templateUrl: './shelly-item.html',
  styleUrl: './shelly-item.css',
})
export class ShellyItem implements OnInit{
   @Input() shelly?: ShellyDevice;

  public ngOnInit(): void {
    
  }

}
