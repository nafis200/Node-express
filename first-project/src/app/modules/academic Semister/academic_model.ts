
import { Schema,model } from "mongoose";
import type { TacademicSemisterCode, TacademicSemisterName, TAcademisSemister, TMonth } from "./academic_semister_interface";

const months: TMonth[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const AcademicSemisterName : TacademicSemisterName[] = ['Autumn','Summar','Fall']

  const AcademicSemisterCode: TacademicSemisterCode[] = [
     '01' , '02' , '03'
  ]


const acdemicSemisterSchema = new Schema<TAcademisSemister>({
    name:{
        type:String,
        required:true,
        enum:AcademicSemisterName
    },
    year:{
        type:Date,
        required:true,
    },
    code:{
        type:String,
        required:true,
        enum:AcademicSemisterCode
    },
    startMonth:{
        type:String,
        required:true,
        enum:months
    },
    endMonth:{
        type:String,
        required:true,
        enum:months
    },

},{
    timestamps:true
})

export const AcademicSemister = model<TAcademisSemister>('AcademicSemister',acdemicSemisterSchema)
