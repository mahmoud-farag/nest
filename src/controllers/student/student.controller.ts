import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { student } from "./student.dto";
import { StudentServices } from "./student.service";

@Controller('student')
export class StudentController {

    constructor(private readonly studentServices:StudentServices){}

    @Get()
   async  getAllStudents():Promise<student[]>{
      return await this.studentServices.getAllStudents();
    }

    @Get('/:studentID')
    async getStudent(@Param('studentID' ) studentID:string): Promise<student>{
      return await this.studentServices.getStudent(studentID);
    }

    @Post()
      createStudent(
       @Body('name')  studentName: string,
       @Body('age', ParseIntPipe)  studentAge: number,
       
     ):Promise<student>{
            // return service func
        return  this.studentServices.createStudent( studentName,studentAge)
     }

     @Put('/:studentID')
     async updatestudent(@Body('name') name: string,
                   @Body('age', ParseIntPipe) age: number,
                   @Param('studentID') studentID:string,
     ): Promise<student>{
         return await this.studentServices.updatestudent(name,age, studentID);
     }
 
     @Delete('/:studentID')
     async deletestudent(@Body('name') name: string,
                   @Param('studentID') studentID: string
     ){
        
         return this.studentServices.deletestudent(studentID);
     }
















}


























