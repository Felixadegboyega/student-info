import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentInfoService } from '../services/student-info.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public router: Router, public studentInfo: StudentInfoService) { }
  public email = ""
  ngOnInit(): void {
    
  }
  view(){
    if(localStorage.studentArray != null && localStorage.studentArray != ""){
      let studentArray = this.studentInfo.getStudents();
      let studentInfo = (studentArray.find((val, i) => val.email == this.email ))
      let ind = studentArray.indexOf(studentInfo)
      this.router.navigate([`allstudent/studentinfo/${ind}`])
      sessionStorage.setItem("studentOnline", studentInfo.email)
      console.log(ind)
    }
  }

}
