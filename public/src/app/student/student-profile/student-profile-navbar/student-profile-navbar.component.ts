import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-student-profile-navbar',
  templateUrl: './student-profile-navbar.component.html',
  styleUrls: ['./student-profile-navbar.component.scss']
})
export class StudentProfileNavbarComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit() {
  }

}
