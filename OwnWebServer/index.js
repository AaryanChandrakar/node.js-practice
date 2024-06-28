const http = require(`http`);
const fs = require(`fs`);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/")
        {
            res.end("Hello from the Home side.")
        }
    else if(req.url == "/about")
        {
            res.end("Hello from the About side.")
        }
    else if(req.url == "/contact")
        {
            res.end("Hello from ContactUs side");
        }
    else if(req.url == "/userapi")
        {
            fs.readFile("C:/Users/acer/Desktop/Node.js/JSONdata/myFile.json", `utf-8`, (err, data)=>{
                console.log(data);
                res.end(data.name);
                const objD = JSON.parse(data);
                console.log(objD)
            })
            res.end(`Kaam khatam`);
        }
    // else
    //     {
    //         res.end("<h1>Error aa gya bhai<h1/>")
    //     }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port no 8000");
});
