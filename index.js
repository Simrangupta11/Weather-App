const http = require("http");
const fs = require("fs");
const homeFile = fs.readFileSync("home.html", "utf-8")
var requests = require("requests");

const server = http.createServer((req, res) =>{
    if (req.url== "/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&APPID=13f32b1a5f095aae09bb1f8edbf9ec36")
        .on("data", (chunk)=>{
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
           // console.log(arrdata[0].main.temp);
           const realTimeData = arrdata.map((val)=>{
               
               replaceVal(homeFile, val);
               //rendering of fetched values yet to be done
           });
        })
        .on("end",  (err)=>{
            if(err) return console.log("connection closed due to errors", err);
            console.log('end');
        });
    }
});
server.listen(8000, "127.0.0.1");