import { Module, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { StudentModule } from 'src/controllers/student/student.module';


@Module({
  imports: [StudentModule],

})
export class AppModule {}
