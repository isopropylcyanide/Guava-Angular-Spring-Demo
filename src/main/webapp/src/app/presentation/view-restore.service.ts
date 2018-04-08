import { Injectable } from '@angular/core';
import { SnippetView } from './snippets/snippets.component';
import { GuavaUseCase } from './guava-use-case';
@Injectable()
export class ViewRestoreService {
  private guavaUseCase: GuavaUseCase;

  public setGuavaUseCase(useCase: GuavaUseCase) {
    this.guavaUseCase = useCase;
  }
  public getGuavaUseCase(): GuavaUseCase {
    return this.guavaUseCase;
  }
  constructor() {}
}
