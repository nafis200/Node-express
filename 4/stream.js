
// HTTP
// createserver method
// createReadStream


const http = require('http')
const fs = require('fs')
const { buffer } = require('stream/consumers')

// creating a server using node.js

const server = http.createServer()

// listener

// node js er build in
server.on('request',(req,res)=>{
    console.log(req.url,req.method);
    
    if(req.url === '/read' && req.method === 'GET'){
        
        // streaming file reading
        // __dirname file . use kora jabe na

        const readableStream = fs.createReadStream(__dirname + '/text/read.txt')
        // const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt') both are same
        readableStream.on('data',(buffer)=>{
            res.statusCode = 200
            res.write(buffer)
        })
        readableStream.on('end',()=>{
            res.statusCode = 200
            res.end("Hellow from world !")
        })
        readableStream.on('error',(err)=>{
            console.log(err);
            
            res.statusCode = 500
            res.end("Something went wrong !")
        })
    }

    
    
})


server.listen(5000,()=>{
    console.log('Server is listen');
    
})


 