

congig change env, and index.ts
import bcrypt from 'bcrypt'
import config from '../../config';

studentSchema.pre('save',async function (next) {
   //  console.log(this, 'pre hook: we will save to data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hasing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next()
});