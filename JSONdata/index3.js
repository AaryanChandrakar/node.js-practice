const fs  = require(`fs`);

fs.readFile(`myFile.json`,`utf-8`,(err, data)=>{
    console.log('done');
    // console.log(data);
    const myObjData = JSON.parse(data);
    console.log(myObjData);
    console.log(data);
});