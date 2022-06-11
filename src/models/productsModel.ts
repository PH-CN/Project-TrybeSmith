import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as IProduct[];
  }
}

export default ProductModel;