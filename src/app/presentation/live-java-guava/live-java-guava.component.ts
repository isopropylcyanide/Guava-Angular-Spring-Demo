import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SnippetView } from '../snippets/snippets.component';
import { GuavaUseCase } from '../guava-use-case';
import { ViewRestoreService } from '../view-restore.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-live-java-guava',
  templateUrl: './live-java-guava.component.html',
  styleUrls: ['./live-java-guava.component.css']
})
export class LiveJavaGuavaComponent implements OnInit {
  private viewInProgess: SnippetView;
  private guavaUseCase: GuavaUseCase;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewRestoreService: ViewRestoreService,
    private location: Location
  ) {
    this.guavaUseCase = viewRestoreService.getGuavaUseCase();
  }

  restoreOriginalView(): void {
    this.location.back();
    // this.router.navigate(['../'], { relativeTo: this.route });
  }
  ngOnInit() {}
}
