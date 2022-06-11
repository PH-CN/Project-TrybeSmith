import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import IProduct from '../interfaces/IProduct';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;