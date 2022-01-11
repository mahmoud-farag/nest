import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { NestApplication } from "@nestjs/core";
import { StudentController } from "./student.controller";
import { StudentMeddileware } from "./student.meddileware";
import { StudentServices } from "./student.service";
import {studentSchema} from '../../dbSchemas/student.shecma';
import { MongooseModule } from "@nestjs/mongoose";
@Module({
    imports:[MongooseModule.forFeature([{name:'Student', schema:studentSchema}])],
    controllers:[StudentController],
    providers:[StudentServices]
})
export class StudentModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(StudentMeddileware)
                .forRoutes({path:'student', method: RequestMethod.GET})
    }
}