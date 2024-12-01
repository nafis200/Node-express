
import { Schema,model } from "mongoose";
import type { TAcademisSemister} from "./academic_semister_interface";
import { AcademicSemisterCode, AcademicSemisterName, months } from "./academic.constant";

const acdemicSemisterSchema = new Schema<TAcademisSemister>({
    name:{
        type:String,
        required:true,
        enum:AcademicSemisterName
    },
    year:{
        type:String,
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
