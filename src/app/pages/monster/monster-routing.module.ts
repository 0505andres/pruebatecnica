import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterComponent } from './monster.component';

const routes: Routes = [{ path: '', component: MonsterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
