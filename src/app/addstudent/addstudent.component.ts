import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../services/student-info.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(public studentInfo : StudentInfoService) { }

  public firstname = ""
  public lastname = ""
  public department = ""
  public level = ""
  public matricno = ""
  public email = ""
  public phone = ""
  public studentArray = []

  ngOnInit(): void {
    if(localStorage.studentArray != null){
      this.studentArray = this.studentInfo.getStudents()
    }
  }

  saveStudent(){
    let studentObj = {
      firstname:this.firstname,
      lastname:this.lastname,
      department:this.department,
      email:this.email,
      phone:this.phone
    }
    this.studentArray = [...this.studentArray, studentObj]
    localStorage.setItem("studentArray", JSON.stringify(this.studentArray))
  }

}
