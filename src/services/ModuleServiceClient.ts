import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (cid) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001420072/courses/${cid}/modules`)
      .then(response => response.json())
      .then(modules => {return modules});
  }

    createModule = (courseId) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001420072/courses/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify({title: 'NewModule'}),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data})

    findCourseWithId = (cid) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001420072/courses/${cid}`)
        .then(response => response.json())
        .then(course => {return course});


}
