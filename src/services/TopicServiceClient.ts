import {Injectable} from '@angular/core';


@Injectable()
export class TopicService {
findTopicsForLesson = (lid) => {
return fetch(`http://wbdv-generic-server.herokuapp.com/api/001420072/lessons/${lid}/topics`)
          .then(response => response.json())
          .then(topics => {return topics});
  }

createTopic = (lessonId) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001420072/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify({title: 'newTopic'}),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data})

}
