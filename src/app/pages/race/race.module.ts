import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { RaceComponent } from './race.component';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from './../../material.module';



@NgModule({
  declarations: [RaceComponent],
  imports: [
    CommonModule,
    RaceRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class RaceModule { }
