import { Module } from "@nestjs/common";
import { TeacherContoller } from "./teacher.controller";
import { TeacherServices } from "./teacher.service";


@Module({
    controllers:[TeacherContoller],
    providers:[TeacherServices]
})
export class teacherModule{}