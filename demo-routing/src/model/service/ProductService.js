import con from "../../config/connectDatabe.js";

class ProductService {
    constructor() {
    }

    async add(newProduct) {
        const query =  `insert into prodcut(nameProduct, price, image, idCategory) values ("${newProduct.nameProduct}", ${newProduct.price}, "${newProduct.image}", ${newProduct.idCategory});`
        await con.promise().query(query);
        return true;
    }

    async getAll() {
        const query = `SELECT p.*, c.name as categoryName FROM prodcut p join category c on c.id = p.idCategory;`;
        let result = (await con.promise().query(query))[0];
        console.log("getAll.result", result)
        return result;
    }

    async getAllCategory() {
        const query = `SELECT * FROM category `;
        let result = (await con.promise().query(query))[0];
        console.log("getAll.result", result)
        return result;
    }
}

export default new ProductService();