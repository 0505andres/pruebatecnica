import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 
  { path: 'monster', loadChildren: () => import('./pages/monster/monster.module').then(m => m.MonsterModule) },
  { path: 'race', loadChildren: () => import('./pages/race/race.module').then(m => m.RaceModule) },
  { path: '**' , redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
