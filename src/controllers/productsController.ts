import { Request, Response } from 'express';
import ProductService from '../services/productsService';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const createdProduct = await this.productService.create(name, amount);
    res.status(201).json(createdProduct);
  };
}

export default ProductController;