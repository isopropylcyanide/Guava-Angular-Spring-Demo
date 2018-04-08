import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { LiveJavaGuavaComponent } from './live-java-guava/live-java-guava.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuavaUseCaseService } from './services/guava-use-case.service';
import { ViewRestoreService } from './view-restore.service';
import { ModalsnippetComponent } from './modalsnippet/modalsnippet.component';

const presentationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
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
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(presentationRoutes),
    MaterialModule
  ],
  declarations: [
    LiveJavaGuavaComponent,
    SnippetsComponent,
    WelcomeComponent,
    ModalsnippetComponent
  ],
  providers: [GuavaUseCaseService, ViewRestoreService],
  entryComponents: [ModalsnippetComponent]
})
export class PresentationModule {}
