import type { TAcademicDepartment } from "./academic-department-interface";
import { AcademicDepartment } from "./academic-department-model";
import mongoose from 'mongoose';


const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {

  const isDepartmentExists = await AcademicDepartment.findOne({name: payload.name})

  if(isDepartmentExists){
    throw new Error("This department already exists")
  }

  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB
};

