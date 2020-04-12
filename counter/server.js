const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
    secret: 'encrypt',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
    count: 0,
}))
app.get('/', (req,res) => {
    console.log("added to count");
    req.session.count += 1;
    res.render('index', {views: req.session.count});
});
app.post('/add', (req,res) => {
    console.log("Success!!!!!!!")
    req.session.count += 1;
    res.redirect('/');
});
app.post('/reset', (req,res) => {
    req.session.count = 0;
    // req.session.destroy();
    res.redirect('/');
});
app.listen(8000, () => console.log("listening on port 8000"));