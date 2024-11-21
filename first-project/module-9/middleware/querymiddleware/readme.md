
// query middleware

<!--  query korar somay all documents asbe -->

<!-- current query execute korar age ne = true ache oigula chai -->


studentSchema.pre('find', function(next){
   
    this.find({isDeleted: {$ne: true}})
    // console.log(this);
    next()
})
<!-- we apply find but not apply findone so apply find one -->

studentSchema.pre('findOne', function(next){
   
  this.find({isDeleted: {$ne: true}})
  // console.log(this);
  next()
})

<!-- it not stop aggregate so you stop it -->

studentSchema.pre('aggregate', function(next){
   
  this.find({isDeleted: {$ne: true}})
  // console.log(this);
  // console.log(this.pipeline());
  this.pipeline().unshift({$match: {isDeleted: {$ne: true}}})
  next()
})