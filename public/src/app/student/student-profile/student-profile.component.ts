import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/shared/services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  _student_ID: any;
  student: any;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router,
    private _studentService: StudentService) {
      this._student_ID = this._activatedRoute.snapshot.paramMap.get('id');
     }

  ngOnInit() {
    this.getStudentProfile();
  }

  getStudentProfile(){
    this._studentService.getStudent(this._student_ID)
    .subscribe((res)=>{
      console.log(res);
      this.student = res['student'];
    }, (err)=>{
      console.log('Error found', err);
    })
  }

}
