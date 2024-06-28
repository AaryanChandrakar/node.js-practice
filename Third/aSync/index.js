const fs = require("fs");

// fs.writeFile(`read.txt`,"Will see asyn", (err)=>{ 
//     console.log("file created");
//     console.log(err);
// });

// fs.appendFile(`read.txt`,"\n ye dusra line hai",(err)=>{
//     console.log("Task completed");
// });

fs.readFile(`read.txt`, `utf8`, (err, data)=>{
    console.log(data);
     
} )