
// emiter.emit


const EventEmiter = require('events')

const myEmitter = new EventEmiter()

//  listener

myEmitter.on('birthday', ()=>{
     console.log("Happy birthday");
     
})

myEmitter.on('birthday',(gift)=>{
    console.log(`I will send a gift ${gift}`);
    
})

myEmitter.emit('birthday',"Watch")