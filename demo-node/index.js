const fs = require("fs");
const http = require('http');
const qs = require('qs');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    // if (req.method === "GET" && req.url == "/register") {
    //     let fileRegister = fs.readFileSync("./views/index.html");
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(fileRegister);
    //     return res.end();
    // }
    // if (req.method === "POST" && req.url == "/register") {
    //     let data = '';
    //     req.on('data', chunk => {
    //         data += chunk; // 
    //     });
    //     req.on('end', () => {
    //         const userInfo = qs.parse(data);
    //         console.log(userInfo);
    //         let htmlInfo = fs.readFileSync("./views/info.html", { encoding: 'utf8', flag: 'r' });
    //         console.log(htmlInfo)
    //         htmlInfo = htmlInfo.replace('{name}', userInfo.name);
    //         htmlInfo = htmlInfo.replace('{email}', userInfo.email);
    //         htmlInfo = htmlInfo.replace('{password}', userInfo.password);
    //         // text html hoàn chỉnh
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write(htmlInfo);
    //         return res.end();
    //     })
    // }

    if (req.method === "GET" && req.url == "/cal") {
        let fileCal = fs.readFileSync("./views/cal.html");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileCal);
        return res.end();
    }

    if (req.method === "POST" && req.url == "/cal") {
        let data = '';
        req.on('data', chunk => {
            data += chunk; // 
        });
        req.on('end', () => {
            const dataForm = qs.parse(data); // {a: 1, pt: '+', b:2}
            let htmlL = fs.readFileSync("./views/result.html", { encoding: 'utf8', flag: 'r' });
            let a = +dataForm.a;
            let pt = dataForm.pt;
            let b = +dataForm.b;
            let result = calculate(pt, a, b);
            htmlL = htmlL.replace('{result}', result);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(htmlL);
            return res.end();
        })
    }
}
);


function calculate(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}
server.listen(8080, '127.0.0.1', () => {
    console.log("Server is running");
});