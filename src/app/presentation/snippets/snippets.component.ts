import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import {
  Router,
  ActivatedRoute,
  ParamMap,
  Event,
  NavigationEnd
} from '@angular/router';

import { GuavaUseCase } from '../guava-use-case';
import { GuavaUseCaseService } from '../services/guava-use-case.service';
import * as _ from 'lodash';

import { ViewRestoreService } from '../view-restore.service';
import { MatSnackBar } from '@angular/material';
import { KEY_CODE } from '../../constant';

export interface SnippetView {
  description: boolean;
  javaWay: boolean;
  guavaWay: boolean;
  live: boolean;
  state?: number;
}

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  @ViewChild('leftarrow') leftArrowButton: ElementRef;
  @ViewChild('rightarrow') rightArrowButton: ElementRef;

  private guavaUseCase: GuavaUseCase;
  private view: SnippetView;
  private viewLeftModeClicked: boolean;
  private viewRightModeClicked: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private guavaUseCaseService: GuavaUseCaseService,
    private viewRestoreService: ViewRestoreService,
    private snackBar: MatSnackBar
  ) {
    this.view = this.initalizeView();
    this.viewLeftModeClicked = false;
    this.viewRightModeClicked = false;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.leftArrowButton.nativeElement.click();
    } else {
      this.rightArrowButton.nativeElement.click();
    }
  }

  // Get the current actual progress bar value
  getProgressbarValue(): number {
    return (this.view.state + 1) * 100 / 3;
  }

  // Route to the currect div in the component
  modifyCurrentView(direction: string): void {
    if (direction === 'left') {
      this.viewLeftModeClicked = true;
      this.view.state = (this.view.state - 1 + 3) % 3;
    } else {
      this.viewRightModeClicked = true;
      this.view.state = (this.view.state + 1) % 3;
    }
    this.view.description = this.view.javaWay = this.view.guavaWay = false;
    this.view.description = this.view.state === 0 ? true : false;
    this.view.javaWay = this.view.state === 1 ? true : false;
    this.view.guavaWay = this.view.state === 2 ? true : false;
    setTimeout(() => {
      this.viewLeftModeClicked = false;
      this.viewRightModeClicked = false;
    }, 300);
  }

  // Initialize the view object when the page loads
  initalizeView(): SnippetView {
    return {
      description: true,
      javaWay: false,
      guavaWay: false,
      live: true,
      state: 0
    };
  }

  // Route to the live view. Store the current use case in a service and set view to null
  gotoLiveView(): void {
    this.viewRestoreService.setGuavaUseCase(this.guavaUseCase);
    this.view.description = false;
    this.view.javaWay = false;
    this.view.guavaWay = false;
    this.view.live = false;

    this.router
      .navigate(['live'], {
        relativeTo: this.route
      })
      .then(
        function(data) {
          // this.snackBar.open('Live Mode enabled', '', { duration: 2000 });
        },
        function(error) {
          console.log(error);
          this.view = this.oldView;
        }
      );
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.guavaUseCaseService
        .getUseCaseById(+params.get('id'))
        .subscribe(useCase => {
          this.guavaUseCase = useCase;
        });
    });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.endsWith('live')) {
          this.view = this.initalizeView();
        }
      }
    });
  }
}
