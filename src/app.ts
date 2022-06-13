import express from 'express';
import ProductController from './controllers/productsController';
import productsFieldsMiddleware from './middlewares/productFieldsMiddleware';

const app = express();

const productController = new ProductController();

app.use(express.json());

app.get('/products', productController.getAll);

app.post('/products', productsFieldsMiddleware, productController.create);

export default app;