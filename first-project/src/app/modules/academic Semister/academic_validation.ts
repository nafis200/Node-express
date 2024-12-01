
import { z } from "zod";



const createAcademicSemisterValidationSchema = z.object({
    body:z.object({
        name:z.enum()
    })
})

export const AcademicSemisterValidation = {
    createAcademicSemisterValidationSchema
}
