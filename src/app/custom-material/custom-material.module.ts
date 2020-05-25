import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatListModule
  ],
})
export class CustomMaterialModule {}
