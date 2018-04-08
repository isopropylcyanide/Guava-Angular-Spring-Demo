import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveJavaGuavaComponent } from './live-java-guava.component';

describe('LiveJavaGuavaComponent', () => {
  let component: LiveJavaGuavaComponent;
  let fixture: ComponentFixture<LiveJavaGuavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveJavaGuavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveJavaGuavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
