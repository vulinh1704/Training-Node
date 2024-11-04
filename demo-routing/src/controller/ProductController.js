import ProductService from "../model/service/ProductService.js";
import fs from 'fs';
import qs from 'qs';
class ProductController {
    constructor() {
        this.productService = ProductService;
    }

    showFormAdd(req, res) {
        let html = fs.readFileSync('./views/products/add.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        return res.end();
    }

    add = (req, res) => {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            const dataForm = qs.parse(data);
            dataForm.id = Date.now();
            this.productService.add(dataForm);
            res.writeHead(302, {
                'Location': '/products/list'
            });
            res.end();
        })
    }


    getAll = (req, res) => {
        let html = fs.readFileSync('./views/products/home.html', { encoding: 'utf8' });
        let textList = ``;
        let listProducts = this.productService.getAll();
        listProducts.map((item) => {
            textList += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src='${item.img}'></td>
            <td><a href="http://localhost:3000/products/delete/${item.id}">Delete</a></td>
            <td><a href="http://localhost:3000/products/edit/${item.id}">Edit</a></td>
        </tr>
        `
        })
        html = html.replace('{list}', textList);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        return res.end();
    }
}

export default new ProductController();