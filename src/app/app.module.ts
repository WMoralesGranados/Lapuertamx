import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ClosetsComponent } from './features/calculators/closets/Florencia-Classic/closets.component';
import { ClosetModalComponent } from './features/home/closet-modal/closet-modal.component';
import { FlorenciaPremiumComponent } from './features/calculators/closets/florencia-premium/florencia-premium.component';
import { Fcpg185Component } from './features/calculators/closets/fcpg185/fcpg185.component';
import { FlorenciaClassicSmallComponent } from './features/calculators/closets/Florencia-Classic/florencia-classic-small/florencia-classic-small.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FCCajoneraCostadoComponent } from './features/calculators/closets/Florencia-Classic/fc-cajonera-costado/fc-cajonera-costado.component';
import { FpCcComponent } from './features/calculators/closets/florencia-premium/fp-cc/fp-cc.component';
import { FpSmallComponent } from './features/calculators/closets/florencia-premium/fp-small/fp-small.component';
import { MilanComponent } from './features/calculators/closets/milan/milan.component';
import { MilanTresModulosComponent } from './features/calculators/closets/milan/milan-tres-modulos/milan-tres-modulos.component';
import { MilanCuatroModulosComponent } from './features/calculators/closets/milan/milan-cuatro-modulos/milan-cuatro-modulos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClosetsComponent,
    ClosetModalComponent,
    FlorenciaPremiumComponent,
    Fcpg185Component,
    FlorenciaClassicSmallComponent,
    SidebarComponent,
    FCCajoneraCostadoComponent,
    FpCcComponent,
    FpSmallComponent,
    MilanComponent,
    MilanTresModulosComponent,
    MilanCuatroModulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
