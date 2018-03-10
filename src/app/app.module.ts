import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';
import { PresentationModule } from './presentation/presentation.module';
import { CaveatsComponent } from './caveats/caveats.component';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, CaveatsComponent, TipsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    PresentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
