import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/shared/services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {

  _teacher_ID: any;
  teacher: any;

  constructor(private _teacherService: TeacherService, private _activatedRoute: ActivatedRoute, 
    private _router: Router) { 
      this._teacher_ID = this._activatedRoute.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.getTeacherProfile();
  }

  getTeacherProfile(){
    this._teacherService.getTeacher(this._teacher_ID)
    .subscribe((res)=>{
      console.log(res);
      this.teacher = res['teacher'];
    }, (err)=>{
      console.log('Error found', err);
    })
  }

}
