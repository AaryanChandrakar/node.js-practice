const fs = require("fs");

// fs.writeFileSync(`read.txt`,"Welcome Guys!");

// fs.writeFileSync(`read.txt`,"Welcome Guys! 2nd");

// fs.appendFileSync(`read.txt`,"ye 3rd line h");

// fs.appendFileSync(`read.txt`," ye 4rth line hai");

// fs.appendFileSync(`read.txt`,"\n ye 5th line hai");

// const buf_data = fs.readFileSync(`read.txt`);

// const org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync(`read.txt`,"readwroite.txt");


