const express = require('express');
const router = express.Router();

const cartController = require('../controllers/controller.cart');

router.get('/', cartController.cart_get);

router.post('/post', cartController.cart_post);

router.put('/:id', cartController.cart_update);

router.delete('/cartitem/:id', cartController.cart_deleteCartItem);
router.delete('/cart/:id', cartController.cart_delete);

module.exports = router;