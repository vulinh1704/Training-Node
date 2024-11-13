import ProductService from "../model/service/ProductService.js";
import fs from 'fs';
import qs from 'qs';
class ProductController {
    constructor() {
        this.productService = ProductService;
    }

    showFormAdd = async (req, res) => {
        let listCategory = await this.productService.getAllCategory();
        let html = fs.readFileSync('./views/products/add.html', { encoding: 'utf8' });
        let htmlOptions = '';
        listCategory.map((item) => {
            htmlOptions += `<option value="${item.id}">${item.name}</option>`
        })
        html = html.replace("{listCategory}", htmlOptions);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        return res.end();
    }

    add = async (req, res) => {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', async () => {
            const dataForm = qs.parse(data);
            dataForm.id = Date.now();
            await this.productService.add(dataForm);
            res.writeHead(302, {
                'Location': '/products/list'
            });
            res.end();
        })
    }

    getAll = async (req, res) => {
        let html = fs.readFileSync('./views/products/home.html', { encoding: 'utf8' });
        let textList = ``;
        let listProducts = await this.productService.getAll();
        listProducts.map((item) => {
            textList += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nameProduct}</td>
            <td><img src='${item.image}'></td>
            <td>${item.categoryName}</td>
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