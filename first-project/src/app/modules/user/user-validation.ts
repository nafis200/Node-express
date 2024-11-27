import { z } from "zod";


const UserValidationSchema = z.object({
    password:z.string({
        invalid_type_error:'Password must be string'
    }).max(20,{message: 'Password cant not be 20 characters'}).optional(),
})

export const Uservalidation = {
    UserValidationSchema
}
