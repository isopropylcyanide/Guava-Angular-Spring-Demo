import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsnippetComponent } from './modalsnippet.component';

describe('ModalsnippetComponent', () => {
  let component: ModalsnippetComponent;
  let fixture: ComponentFixture<ModalsnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
