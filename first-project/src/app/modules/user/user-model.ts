import { Schema,model } from "mongoose";
import type { TUser } from "./user-interface";
import config from "../../config";
import bcrypt from 'bcrypt';



const userSchema = new Schema<TUser>({
    id:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    needPasswordChange:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        enum:['admin','student','faculty']
    },
    status:{
        type:String,
        enum:['in-progress','blocked'],
        default:'in-progress'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})


userSchema.pre('save',async function (next) {
  //  console.log(this, 'pre hook: we will save to data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hasing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.brcypt_salt_rounds),
  );
  next()
});



userSchema.post('save', function (doc,next) {

  doc.password=' '

  
  next()
});





export const User = model<TUser>('User',userSchema)