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
import { FpSmallComponent } from './features/calculators/closets/florecia-premium/fp-small/fp-small.component';

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
    FpSmallComponent,
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
