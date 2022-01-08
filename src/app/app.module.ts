import { Module, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { StudentModule } from 'src/controllers/student/student.module';
import { teacherModule } from 'src/controllers/teacher/teacher.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [StudentModule, 
            teacherModule, 
            MongooseModule.forRoot(`mongodb://localhost:27017/testNestjs`)
          
          
           ],

})

export class AppModule {}
