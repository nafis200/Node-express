import type { TAcademicFaculty } from './academic-faculty-interface';
import { AcademicFaculty } from './academic-faculty-model';
import mongoose from 'mongoose';
const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultiesFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultiesIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultiesServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultiesFromDB,
  updateAcademicFacultiesIntoDB,
};
