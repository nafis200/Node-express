import { TAcademisSemister } from '../academic Semister/academic_semister_interface';
import { User } from './user-model';



const findLastStudentId = async()=>{
     const lastStudent = await User.findOne({
         role:'student'
     },{
        id: 1,
        _id: 0
     },
    )
    .sort({createdAt: -1})
    .lean()

    return lastStudent?.id ? lastStudent.id.substring(6) : undefined
}



export const generateStudentId = async(payload: TAcademisSemister) => {
  // first time 0000

//   console.log(await findLastStudentId());
  
  const currentId = await findLastStudentId() ||(0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
