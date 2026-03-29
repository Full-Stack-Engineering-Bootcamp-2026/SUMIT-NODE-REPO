const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../data/product.json");

module.exports = class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  save() {
    Product.fetchAll((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products, null, 2), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
};