
<!-- delete na kore true kore dibo -->

const deleteStudentIntoDB = async(id:string)=>{
    const result = await Student.updateOne({id},{isDeleted: true})
    return result
}