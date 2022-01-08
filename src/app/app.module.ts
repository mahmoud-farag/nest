import { Module, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { StudentModule } from 'src/controllers/student/student.module';
import { teacherModule } from 'src/controllers/teacher/teacher.module';


@Module({
  imports: [StudentModule,  teacherModule],

})
export class AppModule {}
