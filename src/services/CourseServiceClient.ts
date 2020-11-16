import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
    findAllCourses = () => {
          return fetch('http://wbdv-generic-server.herokuapp.com/api/001420072/courses')
            .then(response => response.json()).then(data => {return data})
    }
    findCourseById = (cid) => {
      return fetch(`http://wbdv-generic-server.herokuapp.com/api/001420072/courses/${cid}`)
        .then(response => response.json())
        .then(course => {return course});
    }
    createCourse = (courseTitle) =>
      fetch('https://wbdv-generic-server.herokuapp.com/api/001420072/courses', {
        method: 'POST',
        body: JSON.stringify({title: courseTitle}),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json()).then(data => {return data})
    deleteCourse = (course) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001420072/courses/${course._id}`, {
      method: 'DELETE'
    }).then(response => response.json())

}
