import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  Event,
  NavigationEnd
} from '@angular/router';
import { SnippetView } from '../snippets/snippets.component';
import { GuavaUseCase } from '../guava-use-case';
import { ViewRestoreService } from '../view-restore.service';
import { Location } from '@angular/common';
import { GuavaUseCaseService } from '../services/guava-use-case.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ModalsnippetComponent } from '../modalsnippet/modalsnippet.component';

@Component({
  selector: 'app-live-java-guava',
  templateUrl: './live-java-guava.component.html',
  styleUrls: ['./live-java-guava.component.css']
})
export class LiveJavaGuavaComponent implements OnInit {
  private guavaUseCase: GuavaUseCase;
  private modalSnippetDialogRef: MatDialogRef<ModalsnippetComponent>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewRestoreService: ViewRestoreService,
    private guavaUseCaseService: GuavaUseCaseService,
    private location: Location,
    private dialog: MatDialog
  ) {
    this.getCurrentGuavaUseCase();
  }

  // Fetch current object either from service or cached service
  getCurrentGuavaUseCase(): void {
    this.guavaUseCase = this.viewRestoreService.getGuavaUseCase();
    if (null == this.guavaUseCase) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          const id: number = +event.url.split('/').slice(-2)[0];
          this.guavaUseCaseService.getUseCaseById(id).subscribe(usecase => {
            this.guavaUseCase = usecase;
          });
        }
      });
    }
  }

  // Execute code actions
  openExecuteDialog(executeBoth: boolean, language: string): void {
    const description: string = executeBoth
      ? 'Comparison'
      : language.toUpperCase();
    this.modalSnippetDialogRef = this.dialog.open(ModalsnippetComponent, {
      height: '300px',
      width: '400px',
      data: {
        description: description,
        result: 'Executed successfully'
      }
    });
  }

  restoreOriginalView(): void {
    this.location.back();
  }
  ngOnInit() {}
}
