let http = require('http');
const path = require('path');
let fs = require('fs');
const qs = require('qs');

let listProducts = [
    {
        id: 1,
        name: 'Bánh',
        img: 'data:image/jpeg;base64,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'
    }
]

let server = http.createServer((req, res) => {
    let arrPath = req.url.split('/');
    console.log(arrPath);
    let rootPath = arrPath[1];
    if (req.method === 'GET') {
        switch (rootPath) {
            case 'products':
                handlePathGetProduct(arrPath[2], req, res);
                break;
            case 'categories':
                handlePathCategory(arrPath[2], req, res);
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


function handlePathPostProduct(path, req, res) {
    switch (path) {
        case 'add':
            addProduct(req, res);
            break;
        case 'edit':
            // To do
            break;
    }
}

function addProduct(req, res) {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        const dataForm = qs.parse(data);  // {id: 1, name: 'Keo', img: '...'}
        listProducts.push(dataForm);
        res.writeHead(302, {
            'Location': '/products/list'
        });
        res.end();
    })
}


function showError404(req, res) {
    let html = fs.readFileSync('./views/error/not-found.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    return res.end();
}

function handlePathGetProduct(path, req, res) {
    switch (path) {
        case 'list':
            showHome(req, res);
            break;
        case 'add':
            showFormAdd(req, res);
            break;
        case 'edit':
            // To do
            break;
    }
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


function showHome(req, res) {
    let html = fs.readFileSync('./views/products/home.html', { encoding: 'utf8' });
    console.log(html);
    let textList = ``;
    listProducts.map((item) => {
        textList += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src='${item.img}'></td>
        </tr>
        `
    })
    html = html.replace('{list}', textList);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    return res.end();
}


function showFormAdd(req, res) {
    let html = fs.readFileSync('./views/products/add.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    return res.end();
}


server.listen(3000, () => {
    console.log("Server is running")
})


