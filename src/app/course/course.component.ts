import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: string[] = [];
  courseName: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  addCourse() {
    
    this.dataService.addCourse(this.courseName);

    this.courseName = '';
    this.startDate = '';
    this.endDate = '';

    this.dataService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });

    console.log('Course added:', this.courseName, this.startDate, this.endDate);
  }
}