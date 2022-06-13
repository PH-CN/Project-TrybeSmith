import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async create(name: string, amount: string) {
    const [result] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount) VALUE (?, ?)`, [name, amount]);
    const { insertId } = result;
    return { id: insertId, name, amount };
  }
}

export default ProductModel;