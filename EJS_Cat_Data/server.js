const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/cats', (req, res) => {
    res.render('cats');
});
app.get('/snowball', (req, res) => {
    var kitty = [
        {image: "cat5.jpg", name: "Snowball", favorite_food: "Spaghetti", age: 3, sleeping_spots: ["under the bed", "in a sunbeam"]}
    ];
    res.render('details', {kitty_cat: kitty});
});
app.get('/tiger', (req, res) => {
    var kitty = [
        {image: "cat7.jpg", name: "Tiger", favorite_food: "Cat-food", age: 7, sleeping_spots: ["on the bed", "on the couch"]}
    ];
    res.render('details', {kitty_cat: kitty});
});

app.listen(8000, () => console.log("listening on port 8000"));