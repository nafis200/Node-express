import { AcademicSemister } from "./academic_model";
import { TAcademicSemesterNameCodeMapper, TAcademisSemister } from "./academic_semister_interface";


const academicSemesterNameCodeMapper:TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03'
}


const createAcademicSemesterIntoDB = async(payload:TAcademisSemister)=>{


    if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invalid Semester Code')
    }

     const result = await AcademicSemister.create(payload)

     return result

}

const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemister.find();
    return result;
  };
  
  const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemister.findById(id);
    return result;
  };


  const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademisSemister>,
  ) => {
    if (
      payload.name &&
      payload.code &&
      academicSemesterNameCodeMapper[payload.name] !== payload.code
    ) {
      throw new Error('Invalid Semester Code')
    }
  
    const result = await AcademicSemister.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };
  

  

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB
   
    
}