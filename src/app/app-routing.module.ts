import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomComponent }   from './components/room/room.component';

const routes: Routes = [
  { path: '', redirectTo: '/room', pathMatch: 'full' },
  { path: 'room',  component: RoomComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}