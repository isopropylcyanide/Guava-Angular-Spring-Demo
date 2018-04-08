import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { GuavaUseCaseService } from '../services/guava-use-case.service';
import { GuavaUseCase } from '../guava-use-case';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  showWelcomeRouteDiv: boolean;
  guavaUseCaseLists: Array<GuavaUseCase>;

  constructor(
    private router: Router,
    private guavaUseCaseService: GuavaUseCaseService
  ) {
    // show welcome div only when at the correct url
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showWelcomeRouteDiv =
          event.url.endsWith('/welcome') || event.url.endsWith('/presentation');
      }
    });

    guavaUseCaseService
      .getUseCases()
      .subscribe(list => (this.guavaUseCaseLists = list));
  }
  ngOnInit() {}
}
