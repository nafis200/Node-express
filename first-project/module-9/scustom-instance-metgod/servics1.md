
const createStudentIntoDB = async (studentData: TStudent) => {
    //  const result = await Student.create(studentData)
    const student = new Student(studentData)
    
    if(await student.isUserExists(studentData.id)){
        throw new Error('User already exists')
    }

    const result = await student.save()
     return result;
};