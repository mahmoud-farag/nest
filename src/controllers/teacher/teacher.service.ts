import { Injectable } from "@nestjs/common";

@Injectable()
export class TeacherServices {
   

   // teacher/   Get Route
    getTeachers(){


        return `return all teachers`
    }

    // teacher/:id  Get Route
    getTeacherById(teacherID, color): string{
        return `single teacher id: ${teacherID}, color= ${color}`
    }

    //  teacher  Post Route
    createTeacher(name:string, id: string){

        return `your teacher name is :${name}, id : ${id} `
    }
    // teacher/:id Put Route
    updateteacher(name: string, teacherID: string){

        return `updated teacher name: ${name} id : ${teacherID}`
    }
    // teacher/:id   Delete Route
    deleteTeacher(name: string, teacherID: string){
       return `the deleted teacher id: ${teacherID}`
    }
}




