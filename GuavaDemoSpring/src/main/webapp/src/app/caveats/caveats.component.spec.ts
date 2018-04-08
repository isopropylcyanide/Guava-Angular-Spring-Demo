import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaveatsComponent } from './caveats.component';

describe('CaveatsComponent', () => {
  let component: CaveatsComponent;
  let fixture: ComponentFixture<CaveatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaveatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaveatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
