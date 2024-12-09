import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ClosetsComponent } from './features/calculators/closets/Florencia-Classic/closets.component';
import { FlorenciaClassicSmallComponent } from './features/calculators/closets/Florencia-Classic/florencia-classic-small/florencia-classic-small.component';
import { FCCajoneraCostadoComponent } from './features/calculators/closets/Florencia-Classic/fc-cajonera-costado/fc-cajonera-costado.component';
import { FlorenciaPremiumComponent } from './features/calculators/closets/florencia-premium/florencia-premium.component';
import { FpSmallComponent } from './features/calculators/closets/florencia-premium/fp-small/fp-small.component';
import { FpCcComponent } from './features/calculators/closets/florencia-premium/fp-cc/fp-cc.component';
import { Fcpg185Component } from './features/calculators/closets/fcpg185/fcpg185.component';
import { MilanComponent } from './features/calculators/closets/milan/milan.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'calculators/closets/fcpg185', component: Fcpg185Component },
  { path: 'calculators/closets/Florencia-Classic', component: ClosetsComponent },
  { path: 'calculators/closets/Florencia-Classic/florencia-classic-small', component: FlorenciaClassicSmallComponent },
  { path: 'calculators/closets/Florencia-Classic/fc-cajonera-costado', component: FCCajoneraCostadoComponent },
  { path: 'calculators/closets/florencia-premium', component: FlorenciaPremiumComponent },
  { path: 'calculators/closets/florencia-premium/fp-small', component: FpSmallComponent },
  { path: 'calculators/closets/florencia-premium/fp-cc', component: FpCcComponent },
  { path: 'calculators/closets/milan', component: MilanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
