import { Injectable } from '@angular/core';
const url = 'https://wbdv-generic-server.herokuapp.com/api/juat/courses'

@Injectable()
export class CourseService {
    fetchAllCourses = () =>
        fetch('https://wbdv-generic-server.herokuapp.com/api/juat/courses')
            .then(response => response.json());
    createCourse = () =>
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ title: "New Course" }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    updateCourse = (course) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/courses/${course._id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    deleteCourse = (course) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/courses/${course._id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
}