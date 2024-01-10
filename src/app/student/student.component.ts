import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentName: string = '';
  studentId: string = '';

  students: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.students = this.dataService.getStudents();
  }

  addStudent() {
    this.dataService.addStudent(`${this.studentName} (ID: ${this.studentId})`);

    this.studentName = '';
    this.studentId = '';

    this.students = this.dataService.getStudents();

    console.log('Student added:', this.studentName, this.studentId);
  }
}
