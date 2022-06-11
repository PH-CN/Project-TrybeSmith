import express from 'express';
import ProductController from './controllers/productsController';

const app = express();

const productController = new ProductController();

app.use(express.json());

app.get('/products', productController.getAll);

export default app;