import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ClosetsComponent } from './features/calculators/closets/Florencia-Classic/closets.component';
import { FlorenciaPremiumComponent } from './features/calculators/closets/florencia-premium/florencia-premium.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'calculators/closets/Florencia-Classic', component: ClosetsComponent },
  { path: 'calculators/closets/florencia-premium', component: FlorenciaPremiumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
