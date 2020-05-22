// const commandDelays = require('./commandDelays');
// const dgram = require('dgram');
// // const wait = require('waait'); 


// const PORT = 8889;
// const HOST = '192.168.10.1';

// const server = dgram.createSocket('udp4');
// server.bind(PORT);

// server.on('message', message => {
//     console.log(`${message}`);
// });

// function handleError(err){
//     err ? console.log("Error", err): null;
// }

// const commands = ['command', 'battery?', 'takeoff','land'];

// let i = 0;

// server.send('command',0,7, PORT, HOST,handleError);
// server.send('battery?',0,8, PORT, HOST,handleError);

// var height = [1,8,6,2,5,4,8,3,7]; 
// var maxArea = function(height) {
    
//     for(var i=0; i< height.length; i++){
//         for(j=i+1; j<height.length; j++){
//             if(height[i] >= height[j]){
//                 var big = height[i];
//             }     
//         }
//     }
//     for(var i=0; i< height.length; i++){
//         for(j=i+1; j<height.length; j++){
//             if(height[i] > height[j]){
//                 var tmp = height[j];
//                 height[j] = height[i];
//                 height[i] = tmp;
//             }     
//         }
//     }

//     for(var i=height.length-1; i >=0; i--){
        
//         if(height[i]<big){
//             return height[i]*(big-1);
//         }

//     }  
    
// };

// console.log(maxArea(height));
// console.log("maher")

let str = "Hello"; 

console.log(str.substring(1,2));
// console.log(str.substring(0,3))
console.log(str.substr(1,2));
// console.log(str.substring(0,3))


