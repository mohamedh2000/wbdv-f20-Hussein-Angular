import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseServiceClient'

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer-component.component.html',
  styleUrls: ['./course-viewer-component.component.css']
})
export class CourseViewerComponentComponent implements OnInit {
  title = 'Course List Component'
  newCourseTitle = ''
  courses = []

selectedCourse = "";

  createCourse = (newCourseTitle) => {
    let course = this.service.createCourse(newCourseTitle);
    this.courses.push(course);
  }

  deleteCourse = (courseToDelete) => {
    this.courses = this.courses.filter(course => course !== courseToDelete);
    this.service.deleteCourse(courseToDelete);
  }

  selectCourse = (course) => {
    this.selectedCourse = course.title;
  }

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
