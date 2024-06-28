const fs =   require(`fs`);


const myData = {
    name: "Aaryan",
    age: "X",
    DOB: "xx/yy/zz"
}

const jsonData = JSON.stringify(myData);
// console.log(jsonData);

fs.writeFile(`./myFile.json`, jsonData, (err)=>{
     console.log("done");
});

