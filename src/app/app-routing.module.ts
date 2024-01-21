import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TrailerComponent } from './trailer/trailer.component';

const routes: Routes = [
  {path:'index' ,component:IndexComponent},
  {path:'trailer',component:TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
