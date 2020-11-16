import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseServiceClient'
import { ModuleService } from '../../services/ModuleServiceClient'
import { LessonService } from '../../services/LessonServiceClient'

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Course List Component'
  newCourseTitle = ''
  courses = []
  course = {}
  modules = []
  lessons = []

  selectedCourse = "";

  createCourse = (newCourseTitle) => {
    this.courses.push({_id: (new Date()).getTime() + '', title: newCourseTitle});
    this.courseService.createCourse(newCourseTitle);
  }

  deleteCourse = (courseToDelete) => {
    this.courses = this.courses.filter(course => course !== courseToDelete);
    this.courseService.deleteCourse(courseToDelete);
  }

  selectCourse = (course) => {
    this.selectedCourse = course.title;
    this.moduleService.findModulesForCourse(course._id).then(modules => this.modules = modules);
  }

  constructor(private courseService: CourseService,
              private moduleService: ModuleService,
              private lessonService: LessonService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }

}
