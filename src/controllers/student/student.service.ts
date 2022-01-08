import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { student } from "./student.dto";


@Injectable()
export class StudentServices{



   constructor(@InjectModel('Student') private readonly studentModel: Model<student>){}
   
    
   async getAllStudents(): Promise<student[]>{
           return await this.studentModel.find(); 
    }   

    async getStudent(studentID: string): Promise<student>{
           console.log(studentID)
           const studentObj = await this.studentModel.findById(studentID)  
            
           return  {_id:studentObj._id, name: studentObj.name, age: studentObj.age}
    }

    async createStudent(name: string, age: number):Promise<student>{
           const newStduent = new this.studentModel({name, age});
           return  await newStduent.save();
         
    }

    // student/:id Put Route
    async updatestudent(name: string,age:number, studentID: string): Promise<student>{
        // const filterKeys = {}
           const updatedStudent = await this.studentModel
                                            .findOneAndUpdate({studentID}, {name, age}, {new:true});
           
           return updatedStudent 
    }
    // student/:id   Delete Route
    async deletestudent(studentID: string): Promise<student>{
           const deletedStudent = await this.studentModel.findByIdAndRemove(studentID);
           
           return  deletedStudent
    }
}   








