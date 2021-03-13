const  productRouter = require('./products');
const  sitesRouter = require('./sites');

function route(app){

    app.use('/products', productRouter);

    app.use('/', sitesRouter)

}

module.exports = route;