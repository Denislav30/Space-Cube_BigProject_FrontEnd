import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/courses`);
  }

  getStudents(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/students`);
  }

  addCourse(course: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/courses`, { course });
  }

  addStudent(student: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/students`, { student });
  }
}