import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectsComponent } from './single-projects.component';

describe('SingleProjectsComponent', () => {
  let component: SingleProjectsComponent;
  let fixture: ComponentFixture<SingleProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
