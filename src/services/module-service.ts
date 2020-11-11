import { Injectable } from '@angular/core';

@Injectable()
export class ModuleService {
    findModulesForCourse = (course) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/courses/${course._id}/modules`)
            .then(response => response.json())
    findModulesByCourseId = (courseId) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/courses/${courseId}/modules`)
            .then(response => response.json())
    createModuleForCourse = (courseId) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/courses/${courseId}/modules`, {
            method: 'POST',
            body: JSON.stringify({ title: "New Module" }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    deleteModule = (module) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/juat/modules/${module._id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
}
