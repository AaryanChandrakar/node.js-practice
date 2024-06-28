const fs = require(`fs`);

// fs.mkdir(`C:\\Users\\acer\\Desktop\\Node.js\\Thapa\\async`, ()=>{
//     console.log("DONE");
// });

// fs.writeFile(`./async/myFile.txt`, "This is first line ", ()=>{
//     console.log("Done");
// });

// fs.appendFile(`./async/myFile.txt`,"\n This is second line", ()=>{
//     console.log("Second comment added");
// });

// fs.rename(`C:\\Users\\acer\\Desktop\\Node.js\\Thapa\\async\\myFile.txt`, `C:\\Users\\acer\\Desktop\\Node.js\\Thapa\\async\\yourFile.txt`, ()=>{
//     console.log("file renamed");
// })

// fs.readFile(`./async/yourFile.txt`, `utf8`, (err, data)=>{
//     console.log(data);
// });

// fs.unlink(`./async/yourFile.txt`, ()=>{
//     console.log("folder deleted");
// });

fs.rmdir('./async', ()=>{
    console.log("Folder Deleted");
});