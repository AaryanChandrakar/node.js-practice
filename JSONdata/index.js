const myData = {
    name: "Aaryan",
    age: "X",
    DOB: "xx/yy/zz"
}

const jsonData = JSON.stringify(myData);
console.log(jsonData);

const objData = JSON.parse(jsonData)
console.log(objData); 