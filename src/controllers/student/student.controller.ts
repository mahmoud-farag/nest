import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StudentServices } from "./student.service";

@Controller('student')
export class StudentController {

    constructor(private readonly studentServices:StudentServices){}

    @Get()
    getAllStudents(){
      return this.studentServices.getAllStudents();
    }

    @Get('/:studentID')
    getStudent(@Param('studentID') studentID:string){
      return this.studentServices.getStudent(studentID);
    }

    @Post()
     createStudent(
        @Body('id')    studentID: string,
        @Body('name')  studentName: string

     ):any{
            // return service func
        return this.studentServices.ceateStudent(studentID, studentName)
     }
















}


























