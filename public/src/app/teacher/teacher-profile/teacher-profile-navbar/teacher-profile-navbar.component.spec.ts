import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileNavbarComponent } from './teacher-profile-navbar.component';

describe('TeacherProfileNavbarComponent', () => {
  let component: TeacherProfileNavbarComponent;
  let fixture: ComponentFixture<TeacherProfileNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherProfileNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
