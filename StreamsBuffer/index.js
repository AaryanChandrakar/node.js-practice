const fs = require(`fs`);

const http = require(`http`);

const server = http.createServer();

server.on(`request`, (req, res)=> {
    fs.readFile(`./input.txt`, `utf-8`, (err, data)=>{
        res.end(data);
    })
})

server.listen(9000, `127.0.0.1`, ()=>{
    console.log("Listening  to the port no 9000");
})

// this is the older way, in 2nd file there is new way to perform is via streams and buffer