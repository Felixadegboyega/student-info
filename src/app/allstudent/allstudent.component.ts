import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentInfoService } from '../services/student-info.service';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  public studentArray = []
  constructor(public router: Router, public studentInfo:StudentInfoService) { }
  
  ngOnInit(): void {
    if(localStorage.studentArray != null || localStorage.studentArray != ""){
      this.studentArray = this.studentInfo.getStudents();
    }
  }
  delete(i){
    this.studentArray.splice(i, 1)
    localStorage.setItem("studentArray", JSON.stringify(this.studentArray))
  }

}
