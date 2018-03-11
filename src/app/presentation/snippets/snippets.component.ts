import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GuavaUseCase } from '../guava-use-case';
import { GuavaUseCaseService } from '../services/guava-use-case.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  private guavaUseCase: GuavaUseCase;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private guavaUseCaseService: GuavaUseCaseService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.guavaUseCaseService
        .getUseCaseById(+params.get('id'))
        .subscribe(useCase => (this.guavaUseCase = useCase));
    });
  }
}
