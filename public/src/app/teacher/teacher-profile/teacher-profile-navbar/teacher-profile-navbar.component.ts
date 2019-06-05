import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-teacher-profile-navbar',
  templateUrl: './teacher-profile-navbar.component.html',
  styleUrls: ['./teacher-profile-navbar.component.scss']
})
export class TeacherProfileNavbarComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit() {
  }

}
