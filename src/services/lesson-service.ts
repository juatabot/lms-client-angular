import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {
    findLessonsForModule = (moduleId) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/modules/${moduleId}/lessons`)
            .then(response => response.json())
    createLessonForModule = (moduleId) =>
        fetch('https://wbdv-generic-server.herokuapp.com/api/juat/modules/${moduleId}/lessons', {
            method: 'POST',
            body: JSON.stringify({ title: "New Lesson" }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
}
