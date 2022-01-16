const express = require('express');
const app = express();
const fs = require('fs');


app.get('/get-product', function (req, res) {
    try {
        const product_id = req.query.product_id;
        let rawdata = fs.readFileSync('products.json');
        let json = JSON.parse(rawdata);
        const productInfo = json.find(p => p.id == product_id)
        if (productInfo) {
            return res.send(productInfo);
        } else {
        console.error(`couldnt Find Record for ${product_id}`);
            return res.send(500);
        }
    } catch (error) {
        console.error(`Interval Server Error: ${error.message}`, error);
        res.status(500);
    }
});

app.get('/get-site', function (req, res) {
    try {
        const site_id = req.query.site_id;
        let rawdata = fs.readFileSync('products.json');
        let json = JSON.parse(rawdata);
        const productInfo = json.find(p => p.id == site_id)
        if (productInfo) {
            return res.send(productInfo);
        } else {
        console.error(`couldnt Find Record for ${site_id}`);
            return res.send(500);
        }
    } catch (error) {
        console.error(`Interval Server Error: ${error.message}`, error);
        res.status(500);
    }
});

app.listen(process.env.PORT || 8080);