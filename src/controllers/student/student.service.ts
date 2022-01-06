import { Injectable } from "@nestjs/common";


@Injectable()
export class StudentServices{


    getAllStudents(){
        return `get all students`
    }

    getStudent(studentID: string){

        return `single Student by id: ${studentID}`
    }

    ceateStudent(id:string, name: string):any{

        return `${name} created by id:${id}`
    }

}   








