import { Request, Response } from 'express';
import UserService from '../services/userService';
import generateToken from '../utils/generateToken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const { username, classe, level, password } = req.body;

    const { insertId } = await this.userService.create(username, classe, level, password);

    const token = generateToken({ id: insertId, ...user });

    res.status(201).json({ token });
  };
}

export default UserController;