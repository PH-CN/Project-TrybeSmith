import jwt from 'jsonwebtoken';
import User from '../interfaces/UserI';

const secret = 'verysecretpassword';

const generateToken = (user: User) => {
  const token = jwt.sign({ data: user }, secret, { expiresIn: '2d' });

  return token;
};

export default generateToken;