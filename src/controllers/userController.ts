import { Request, Response } from 'express';
import UserService from '../services/userService';
import generateToken from '../utils/generateToken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const { username, classe, level, password } = req.body;

    await this.userService.create(username, classe, level, password);

    const token = generateToken(user);

    res.status(201).json({ token });
  };
}

export default UserController;