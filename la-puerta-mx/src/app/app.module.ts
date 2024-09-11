import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ClosetsComponent } from './features/calculators/closets/Florencia-Classic/closets.component';
import { ClosetModalComponent } from './features/home/closet-modal/closet-modal.component';
import { FlorenciaPremiumComponent } from './features/calculators/closets/florencia-premium/florencia-premium.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClosetsComponent,
    ClosetModalComponent,
    FlorenciaPremiumComponent,
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
