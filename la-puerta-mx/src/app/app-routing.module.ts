import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ClosetsComponent } from './features/calculators/closets/Florencia-Classic/closets.component';
import { FlorenciaPremiumComponent } from './features/calculators/closets/florencia-premium/florencia-premium.component';
import { Fcpg185Component } from './features/calculators/closets/fcpg185/fcpg185.component';
import { FlorenciaClassicSmallComponent } from './features/calculators/closets/Florencia-Classic/florencia-classic-small/florencia-classic-small.component';
import { FCCajoneraCostadoComponent } from './features/calculators/closets/Florencia-Classic/fc-cajonera-costado/fc-cajonera-costado.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'calculators/closets/Florencia-Classic', component: ClosetsComponent },
  { path: 'calculators/closets/florencia-premium', component: FlorenciaPremiumComponent },
  { path: 'calculators/closets/fcpg185', component: Fcpg185Component },
  { path: 'calculators/closets/florencia-classic-small', component: FlorenciaClassicSmallComponent },
  { path: 'calculators/closets/fc-cajonera-costado', component: FCCajoneraCostadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
