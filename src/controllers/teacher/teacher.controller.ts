import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common'
import { TeacherServices } from './teacher.service';

@Controller('teacher')
export class TeacherContoller {

    constructor(private readonly teacherServices:TeacherServices){}

    @Get()
    getTeachers(){
    return this.teacherServices.getTeachers();
    }

    @Get('/:teacherID')
    getTeacherById(@Param('teacherID') teacherID: string,
                   @Query('color') color:string           
    ){
        return this.teacherServices.getTeacherById(teacherID, color);
    }

    @Post()
    createTeacher(@Body('name') name:string,
                  @Body('id') id:string
        ){

        return this.teacherServices.createTeacher(name, id) 
    }

    @Put('/:teacherID')
    updateteacher(@Body('name') name: string,
                  @Param('teacherID') teacherID:string
    ){
        return this.teacherServices.updateteacher(name, teacherID);
    }

    @Delete('/:teacherID')
    deleteTeacher(@Body('name') name: string,
                  @Param('teacherID') teacherID: string
    ){
        return this.teacherServices.deleteTeacher(name,teacherID);
    }


}

















