import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterRoutingModule } from './monster-routing.module';
import { MonsterComponent } from './monster.component';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [MonsterComponent],
  imports: [
    CommonModule,
    MonsterRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MonsterModule { }
