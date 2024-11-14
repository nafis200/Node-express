
const fs = require("fs")

// reading text asynchronosly

fs.readFile('./text/read.txt','utf-8',(err,data)=>{
     if(err){
        throw Error("Error reading text")
     }

     console.log(data);

    //  writing text asyncChronus

    fs.writeFile('./text/read2.txt',data,'utf-8',(err)=>{
         if(err){
            throw Error ("Error writing data")
         }

    })
     
})


console.log("Testing asyncChroronus");



