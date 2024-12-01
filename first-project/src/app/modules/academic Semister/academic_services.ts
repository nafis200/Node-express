import { AcademicSemister } from "./academic_model";
import type { TAcademicSemesterNameCodeMapper, TAcademisSemister } from "./academic_semister_interface";



const createAcademicSemesterIntoDB = async(payload:TAcademisSemister)=>{

    // semester name ----> semester code

    

    const academicSemesterNameCodeMapper:TAcademicSemesterNameCodeMapper = {
        Autumn: '01',
        Summar: '02',
        Fall: '03'
    }

    if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invalid Semester Code')
    }

     const result = await AcademicSemister.create(payload)

     return result

}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}