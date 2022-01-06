import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class StudentMeddileware  implements NestMiddleware{

    use(req:Request, res: Response , next:NextFunction){
      console.log(` meddileware is here`)


      // to perserve the current req any pass the execution to the next meddileware 
      next()
    }
}











