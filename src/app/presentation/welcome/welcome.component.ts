import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  showWelcomeRouteDiv: boolean;

  constructor(private router: Router) {
    // show welcome div only when at the correct url
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showWelcomeRouteDiv =
          event.url.endsWith('/welcome') || event.url.endsWith('/presentation');
      }
    });
  }
  ngOnInit() {}
}
