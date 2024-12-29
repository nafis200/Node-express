import { z } from "zod";
import { UserStatus } from "./user.constant";


const UserValidationSchema = z.object({
    password:z.string({
        invalid_type_error:'Password must be string'
    }).max(20,{message: 'Password cant not be 20 characters'}).optional(),
})

const changeStatusValidationSchema = z.object({
    body: z.object({
      status: z.enum([...UserStatus] as [string, ...string[]]),
    }),
  });

export const Uservalidation = {
    UserValidationSchema,
    changeStatusValidationSchema,
}
