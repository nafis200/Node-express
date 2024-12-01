import { TAcademisSemister } from "../academic Semister/academic_semister_interface";



export const generateStudentId = (payload: TAcademisSemister) =>{
      
    // first time 0000
    const currentId = (0).toString()

    let incrementId = (Number(currentId) + 1).toString().padStart(4,'0');


    incrementId = `${payload.year}${payload.code}${incrementId}`

    return incrementId
      

}