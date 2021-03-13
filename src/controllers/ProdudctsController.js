class ProdudctsController{

    //lấy trang product, phuong thuc get.
    index(req, res){
        res.render('products');
    }

    //vao cac trang chi tiet san pham
    show(req, res){
        res.send('product detail');
    }
}

module.exports = new ProdudctsController;