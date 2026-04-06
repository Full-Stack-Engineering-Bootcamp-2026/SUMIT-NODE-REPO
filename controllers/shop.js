const Product = require('../models/product');
const Cart = require('../models/cart');

// Get all products
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows]) => {
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

// Get single product
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  Product.findById(prodId)
    .then(([rows]) => {
      if (rows.length === 0) {
        return res.redirect('/'); // safety check
      }

      res.render('shop/product-detail', {
        product: rows[0],
        pageTitle: rows[0].title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

// Get homepage
exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

// Get cart
exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll()
      .then(([products]) => {
        const cartProducts = [];

        for (let product of products) {
          const cartProductData = cart.products.find(
            prod => prod.id === product.id
          );

          if (cartProductData) {
            cartProducts.push({
              productData: product,
              qty: cartProductData.qty
            });
          }
        }

        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: cartProducts
        });
      })
      .catch(err => console.log(err));
  });
};

// Add to cart
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId)
    .then(([rows]) => {
      if (rows.length === 0) {
        return res.redirect('/');
      }

      const product = rows[0];
      Cart.addProduct(prodId, product.price);
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

// Delete from cart
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId)
    .then(([rows]) => {
      if (rows.length === 0) {
        return res.redirect('/cart');
      }

      const product = rows[0];
      Cart.deleteProduct(prodId, product.price);
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

// Orders
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

// Checkout
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};