import connection from '../models/connection';
import UserModel from '../models/userModel';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(username: string, classe: string, level: number, password: string) {
    await this.model.create(username, classe, level, password);
  }
}

export default UserService;