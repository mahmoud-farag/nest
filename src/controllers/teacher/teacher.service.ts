import { Injectable } from "@nestjs/common";

@Injectable()
export class TeacherServices {
   

   // teacher/   Route
    getTeachers(){


        return `return all teachers`
    }

    // teacher/:id Route
    getTeacherById(teacherID, color): string{
        return `single teacher id: ${teacherID}, color= ${color}`
    }

}




