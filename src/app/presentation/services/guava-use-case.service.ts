import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GuavaUseCase } from '../guava-use-case';

import * as _ from 'lodash';

const guavaUseCaseList: Array<GuavaUseCase> = [
  {
    id: 1,
    title: 'Pre Conditions',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for ',
    link: 'https://github.com/google/guava/wiki/PreconditionsExplained'
  },
  {
    id: 2,
    title: 'Immutable List',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for ',
    link: 'https://github.com/google/guava/wiki/ImmutableCollectionsExplained'
  },
  {
    id: 3,
    title: 'Bags',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  },
  {
    id: 4,
    title: 'MultiMaps',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  },
  {
    id: 5,
    title: 'Table',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  },
  {
    id: 6,
    title: 'Enhanced Lists and Sets',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  },
  {
    id: 7,
    title: 'Enhanced Maps',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  },
  {
    id: 8,
    title: 'BiMap',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  },
  {
    id: 9,
    title: 'RangeSet',
    description: 'Description about ',
    javaWay: 'Use case in java for ',
    guavaWay: 'Use case in Guava for ',
    problemStatement: 'Problem statement for ',
    defaultInputs: ' Default inputs for '
  }
];
@Injectable()
export class GuavaUseCaseService {
  constructor() {}

  getUseCases(): Observable<Array<GuavaUseCase>> {
    return of(guavaUseCaseList);
  }

  getUseCaseById(id: number): Observable<GuavaUseCase> {
    return of(_.find(guavaUseCaseList, { id: id }));
  }
}
