import { AcademicSemister } from "./academic_model";
import type { TacademicSemisterCode } from "./academic_semister_interface";



const createAcademicSemesterIntoDB = async(payload:TacademicSemisterCode)=>{

     const result = await AcademicSemister.create(payload)

     return result

}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}