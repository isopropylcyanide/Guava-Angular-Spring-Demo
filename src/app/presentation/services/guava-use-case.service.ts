import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GuavaUseCase } from '../guava-use-case';

const guavaUseCaseList: Array<GuavaUseCase> = [
  {
    id: 1,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 2,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 3,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 4,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 5,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 6,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 7,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  },
  {
    id: 8,
    title: '',
    description: '',
    javaWay: '',
    guavaWay: '',
    problemStatement: '',
    defaultInputs: ''
  }
];
@Injectable()
export class GuavaUseCaseService {
  constructor() {}

  getUseCases(): Observable<Array<GuavaUseCase>> {
    return of(guavaUseCaseList);
  }
}
