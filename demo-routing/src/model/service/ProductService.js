import con from "../../config/connectDatabe.js";

class ProductService {
    constructor() {
    }

    async add(newProduct) {
        const query =  `insert into prodcut(nameProduct, price, image) values ("${newProduct.nameProduct}", ${newProduct.price}, "${newProduct.image}");`
        await con.promise().query(query);
        return true;
    }

    async getAll() {
        const query = `SELECT * FROM my_store.prodcut;`;
        let result = (await con.promise().query(query))[0];
        return result;
    }
}

export default new ProductService();