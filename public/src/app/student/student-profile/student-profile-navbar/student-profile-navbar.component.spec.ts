import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileNavbarComponent } from './student-profile-navbar.component';

describe('StudentProfileNavbarComponent', () => {
  let component: StudentProfileNavbarComponent;
  let fixture: ComponentFixture<StudentProfileNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
