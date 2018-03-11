import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GuavaUseCase } from '../guava-use-case';
import { GuavaUseCaseService } from '../services/guava-use-case.service';
import * as _ from 'lodash';
import { ViewRestoreService } from '../view-restore.service';

export interface SnippetView {
  description: boolean;
  javaWay: boolean;
  guavaWay: boolean;
  live: boolean;
}

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  private guavaUseCase: GuavaUseCase;
  private view: SnippetView;
  private oldView: SnippetView;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private guavaUseCaseService: GuavaUseCaseService,
    private viewRestoreService: ViewRestoreService
  ) {
    this.view = {
      description: true,
      javaWay: false,
      guavaWay: false,
      live: true
    };
  }

  gotoLiveView(): void {
    this.viewRestoreService.setGuavaUseCase(this.guavaUseCase);
    this.router
      .navigate(['live'], {
        relativeTo: this.route
      })
      .then(
        function(data) {},
        function(error) {
          console.log(error);
          this.view = this.oldView;
        }
      );
  }

  ngOnInit() {
    console.log('I am called');

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.guavaUseCaseService
        .getUseCaseById(+params.get('id'))
        .subscribe(useCase => {
          this.guavaUseCase = useCase;
        });
    });
  }
}
