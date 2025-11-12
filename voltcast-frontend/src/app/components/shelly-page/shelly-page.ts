import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ShellyDevice } from '../../models/shellyDevice.model';
import { ShellyItem } from "../shelly-item/shelly-item";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ShellyAddConfig } from '../shelly-add-config/shelly-add-config';
@Component({
  selector: 'app-shelly-page',
  imports: [ShellyItem, NgFor, MatDialogModule],
  templateUrl: './shelly-page.html',
  styleUrl: './shelly-page.css',
})
export class ShellyPage implements OnInit{
  protected shellys?: ShellyDevice[];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.shellys = [
    { title: 'Shelly1', isActivated: false, kw: '55' },
    { title: 'Shelly2', isActivated: true, kw: '120' },
    { title: 'Shelly3', isActivated: false, kw: '80' }
    ];
  }
  
  protected configureShelly(shelly: ShellyDevice){
    console.log(shelly)
    const dialogRef = this.dialog.open(ShellyAddConfig, {
        width: '60%',
        height: '60%',
        data: shelly
      });

      dialogRef.afterClosed().subscribe((result: ShellyDevice | undefined) => {
        if (result) {
          const index = this.shellys?.indexOf(shelly);
          if (index !== undefined && index > -1 && this.shellys) {
            this.shellys[index] = result;
          }
        }
      });
  }

  protected addShelly(){
    const dialogRef = this.dialog.open(ShellyAddConfig, {
      width: '60%',
      height: '60%',
    });

    dialogRef.afterClosed().subscribe((result: ShellyDevice | undefined) => {
      if (result) {
        this.shellys?.push(result);
      }
    });
  }
}
