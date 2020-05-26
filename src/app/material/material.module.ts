import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatStepperModule } from "@angular/material/stepper";
import  {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressBarModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressBarModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
