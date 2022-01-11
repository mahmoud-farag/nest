import { Injectable, NotFoundException, NotImplementedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { student } from "./student.dto";


@Injectable()
export class StudentServices{


  // inject the student model {by its name} in student service constructor as ready only property
   constructor(@InjectModel('Student') private readonly studentModel: Model<student>){}
   
    
   async getAllStudents(): Promise<student[]>{
 
        let result;
        try {
            result = await this.studentModel.find(); 
            if(result.length ===0){
                return []
            }
            return result
         } catch (error) {
            throw new Error(error.message)
         }
          
    }   

    async getStudent(studentID: string): Promise<student>{
           
           let studentObj 
            try {
                studentObj = await this.studentModel.findById(studentID) 

                if(!studentObj)  
                throw new NotFoundException(`no student found for this id:${studentID}`)
                 
                return  {_id:studentObj._id, name: studentObj.name, age: studentObj.age}
               
            } catch (error) {
                throw new NotFoundException(`no student found for this id:${studentID}`)   
            }
    }

    async createStudent(name: string, age: number):Promise<student>{
           let result
           const newStduent = new this.studentModel({name, age});
           try {
            result =  await newStduent.save();
            
            return result
           } catch (error) {
               throw new NotImplementedException(`${error.message}`)
           }
           
         
    }

    // student/:id Put Route
    async updatestudent(name: string,age:number, studentID: string): Promise<student>{
        const filterKeys = {_id:studentID}
           let updatedStudent
           try {
            updatedStudent= await this.studentModel
                                      .findOneAndUpdate(filterKeys, {name, age}, {new:true});
            
            
             if(!updatedStudent) 
             throw new NotFoundException(`no student found for this id:${studentID}`)

            } catch (error) {
                if(error.statusCode===501){
                    throw new NotImplementedException(`wrong id format`)

                }else{
                    throw new NotImplementedException(`${error.message}`)
                }

           }
           
           return updatedStudent 
    }
    // student/:id   Delete Route
    async deletestudent(studentID: string): Promise<student>{
           let deletedStudent 
           try {
            deletedStudent= await this.studentModel.findByIdAndRemove(studentID);
            if(!deletedStudent) 
            throw new NotFoundException(`no student found for this id:${studentID}`)

           } catch (error) {
            throw new NotImplementedException(`${error.message}`)
           }
           
           return  deletedStudent
    }
}   








