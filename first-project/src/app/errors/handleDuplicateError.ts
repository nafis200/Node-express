
import type { TErrorSource, TgenereicErrorResponse } from '../interface/error';

const handleDuplicateError = (err:any): TgenereicErrorResponse => {

    const match = err.message.match(/"([^"]*)"/);
    const extracted_message = match && match[1] 
    

  const errorSources:TErrorSource = [{
     path:'',
     message:extracted_message
  }]

  const statusCode = 400;
  return {
    statusCode,
    message: `${extracted_message} is already exists`,
    errorSources,
  };
};

export default handleDuplicateError 
