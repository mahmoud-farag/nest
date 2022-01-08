import {Controller, Get, Param, Post, Query} from '@nestjs/common'
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
}

















