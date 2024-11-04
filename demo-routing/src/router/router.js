import ProductController from "../controller/ProductController.js";

export function handlePathGetProduct(path, req, res) {
    switch (path) {
        case 'list':
            ProductController.getAll(req, res);
            break;
        case 'add':
            ProductController.showFormAdd(req, res);
            break;
        // case 'edit':
        //     showFormEdit(req, res);
        //     break;
        // case 'delete':
        //     remove(req, res);
        //     break;
    }
}


export function handlePathPostProduct(path, req, res) {
    switch (path) {
        case 'add':
            ProductController.add(req, res);
            break;
        case 'edit':
            editProduct(req, res)
            break;
    }
}

