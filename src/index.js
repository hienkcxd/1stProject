const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000

const route = require('./routes');

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.use(express.static(path.join(__dirname,'public')));

//cài đặt cho ứng dụng sử dụng view engine là handlebars
app.set('view engine', 'hbs');
//set đường dẫn thư mục cho handlebars
app.set('views', path.join(__dirname, 'resources/views'));

//routes initasdsadad
route(app);


app.use(morgan('combined'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
