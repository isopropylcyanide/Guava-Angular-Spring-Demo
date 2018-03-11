import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { LiveJavaGuavaComponent } from './live-java-guava/live-java-guava.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { WelcomeComponent } from './welcome/welcome.component';

const presentationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'snippets/:id',
    component: SnippetsComponent,
    children: [
      {
        path: 'live',
        component: LiveJavaGuavaComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(presentationRoutes),
    MaterialModule
  ],
  declarations: [LiveJavaGuavaComponent, SnippetsComponent, WelcomeComponent]
})
export class PresentationModule {}
