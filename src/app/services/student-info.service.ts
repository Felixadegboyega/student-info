import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  constructor() { }
  getStudents(){
    return JSON.parse(localStorage.getItem("studentArray"))
  }
}
