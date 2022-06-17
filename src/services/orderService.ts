import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';
import { OrderIds } from '../interfaces/OrderI';

class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<OrderIds[]> {
    const orders = await this.model.getAll();

    const result = await Promise.all(orders.map(async (order) => {
      const products = await this.productModel.getAll();
      const filteredArr = products.filter((product) => product.orderId === order.id);
      const ids = filteredArr.map((product) => product.id);
      return { ...order, productsIds: ids };
    }));

    return result;
  }
}

export default OrderService;