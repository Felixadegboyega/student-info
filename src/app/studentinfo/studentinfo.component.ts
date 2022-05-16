import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentInfoService } from '../services/student-info.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  constructor(public actStudent: ActivatedRoute, public router:Router, public studentInfo:StudentInfoService) { }
  public studentObj = {
    firstname:"",
    department:"",
    email:"",
    phone:""
  }
  ngOnInit(): void {
    if(localStorage.studentArray != null && localStorage.studentArray != ""){
      let studentArray = this.studentInfo.getStudents();
      let index = this.actStudent.snapshot.params.i
      let studentInfo = (studentArray.find((val, i) => i == index));
      if( studentInfo == undefined || (studentInfo.email != sessionStorage.studentOnline)){
        this.router.navigate(["allstudent/confirm"])
      } else{
        this.studentObj = studentInfo
      }
    }
  }
}
