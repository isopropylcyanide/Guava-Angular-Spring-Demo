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

@Component({
  selector: 'app-live-java-guava',
  templateUrl: './live-java-guava.component.html',
  styleUrls: ['./live-java-guava.component.css']
})
export class LiveJavaGuavaComponent implements OnInit {
  private guavaUseCase: GuavaUseCase;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewRestoreService: ViewRestoreService,
    private guavaUseCaseService: GuavaUseCaseService,
    private location: Location
  ) {
    this.getCurrentGuavaUseCase();
  }

  getCurrentGuavaUseCase(): void {
    this.guavaUseCase = this.viewRestoreService.getGuavaUseCase();
    if (null == this.guavaUseCase) {
      // Handle view object when route changes
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

  restoreOriginalView(): void {
    this.location.back();
  }
  ngOnInit() {}
}
