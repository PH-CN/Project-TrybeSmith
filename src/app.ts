import express from 'express';
import OrderController from './controllers/orderController';
import ProductController from './controllers/productController';
import UserController from './controllers/userController';
import productsFieldsMiddleware from './middlewares/productFieldsMiddleware';
import userFieldsMiddleware from './middlewares/userFieldsMiddleware';

const app = express();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.use(express.json());

app.get('/products', productController.getAll);

app.post('/products', productsFieldsMiddleware, productController.create);

app.post('/users', userFieldsMiddleware, userController.create);

app.get('/orders', orderController.getAll);

export default app;