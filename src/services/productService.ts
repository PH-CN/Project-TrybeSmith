import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../interfaces/ProductI';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products;
  }

  public async create(name: string, amount: string) {
    const createdProduct = await this.model.create(name, amount);

    return createdProduct;
  }
}

export default ProductService;