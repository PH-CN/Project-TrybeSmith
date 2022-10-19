import { Pool, ResultSetHeader } from 'mysql2/promise';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async create(username: string, classe: string, level: number, password: string) {
    const [newUser] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, level, classe, password)
      VALUES (?, ?, ?, ?)`, [username, level, classe, password]);

    return newUser;
  }
}

export default UserModel;