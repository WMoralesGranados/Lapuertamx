import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ClosetsComponent } from './features/calculators/closets/closets/closets.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'closets', component: ClosetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
