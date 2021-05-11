let express = require('express');
let app = express();

//Set Public Static Folder
app.use(express.static(__dirname + '/public'));

//Use View Engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    ext: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//Define routes
app.get('/', (req, res) => {
    res.render('index');
});

//Set Server Port & Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
            console.log(`Server is running at port ${app.get(`port`)}`);
});