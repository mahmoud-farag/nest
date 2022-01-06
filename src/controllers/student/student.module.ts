import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { NestApplication } from "@nestjs/core";
import { StudentController } from "./student.controller";
import { StudentMeddileware } from "./student.meddileware";
import { StudentServices } from "./student.service";

@Module({
    controllers:[StudentController],
    providers:[StudentServices]
})
export class StudentModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(StudentMeddileware)
                .forRoutes({path:'student', method: RequestMethod.GET})
    }
}