import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = (mid) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001420072/modules/${mid}/lessons`)
          .then(response => response.json())
          .then(lessons => {return lessons});
  }
createLesson = (moduleId) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001420072/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify({title: 'newLesson'}),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data})

}
