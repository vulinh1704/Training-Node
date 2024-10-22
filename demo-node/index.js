const fs = require("fs");
const http = require('http');
const qs = require('qs');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    if (req.method === "GET" && req.url == "/register") {
        let fileRegister = fs.readFileSync("./views/index.html");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileRegister);
        return res.end();
    }
    if (req.method === "POST" && req.url == "/register") {
        let data = '';
        req.on('data', chunk => {
            data += chunk; // 
        });
        req.on('end', () => {
            const userInfo = qs.parse(data);
            console.log(userInfo);
            let htmlInfo = fs.readFileSync("./views/info.html", { encoding: 'utf8', flag: 'r' });
            console.log(htmlInfo)
            htmlInfo = htmlInfo.replace('{name}', userInfo.name);
            htmlInfo = htmlInfo.replace('{email}', userInfo.email);
            htmlInfo = htmlInfo.replace('{password}', userInfo.password);
            // text html hoàn chỉnh
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(htmlInfo);
            return res.end();
        })
    }
}
);
server.listen(8080, '127.0.0.1', () => {
    console.log("Server is running");
});