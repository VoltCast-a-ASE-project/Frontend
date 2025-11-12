import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ShellyDevice } from '../../models/shellyDevice.model';

@Component({
  selector: 'app-shelly-add-config',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule 
  ],
  templateUrl: './shelly-add-config.html',
  styleUrl: './shelly-add-config.css',
})
export class ShellyAddConfig {
  shellyForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ShellyAddConfig>,
    @Inject(MAT_DIALOG_DATA) public data?: ShellyDevice 
  ) {
    console.log(this.data)
    this.shellyForm = this.fb.group({
      title: [this.data?.title || '', Validators.required],
      kw: [this.data?.kw || '', Validators.required],
    });
  }

  onAdd() {
    if (this.shellyForm.valid) {
      const newShelly: ShellyDevice = this.shellyForm.value;
      this.dialogRef.close(newShelly);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

