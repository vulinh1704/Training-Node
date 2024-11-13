import http from 'http';
import { handlePathGetProduct, handlePathPostProduct } from './src/router/router.js';
import fs from 'fs';
import { connectDatabase } from './src/config/connectDatabe.js';

connectDatabase();
let server = http.createServer((req, res) => {
    let arrPath = req.url.split('/');
    let rootPath = arrPath[1];
    if (req.method === 'GET') {
        switch (rootPath) {
            case 'products':
                handlePathGetProduct(arrPath[2], req, res);
                break;
            case 'categories':
                handlePathCategory(arrPath[2], req, res);
                break;
            case 'style':
                handleStaticFile(arrPath[2], req, res);
                break;
            default:
                showError404(req, res);
        }
    }

    if (req.method === 'POST') {
        switch (rootPath) {
            case 'products':
                handlePathPostProduct(arrPath[2], req, res)
                break;
            case 'categories':
                break;
            default:
                showError404(req, res);
        }
    }
});


function showError404(req, res) {
    let html = fs.readFileSync('./views/error/not-found.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    return res.end();
}



function handlePathCategory(path, req, res) {
    switch (path) {
        case 'list':
            break;
        case 'add':
            break;
        case 'edit':
            // To do
            break;
    }
}

function handleStaticFile(path, req, res) {
    let staticData = ''
    staticData = fs.readFileSync(`./views/style/${path}`);
    res.write(staticData);
    res.end();
}



server.listen(3000, () => {
    console.log("Server is running")
})


