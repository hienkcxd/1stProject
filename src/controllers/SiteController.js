class SiteController {

    //lấy trang site
    index(req, res){
        res.render('home');
    }

    //lay trang contact
    contact(req, res){
        res.render('contact');
    }
}

module.exports = new SiteController;