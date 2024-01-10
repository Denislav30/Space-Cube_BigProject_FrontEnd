import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private courses: string[] = ['Mathematics', 'Informatics', 'Software Engineer'];
  private students: string[] = ['Denislav Ivanov', 'Ivan Ivanov', 'Petar Ganchev'];

  getCourses(): Observable<string[]> {
    return of(this.courses);
  }

  getStudents(): string[] {
    return this.students;
  }

  addCourse(course: string) {
    this.courses.push(course);
  }

  addStudent(student: string) {
    this.students.push(student);
  }
}