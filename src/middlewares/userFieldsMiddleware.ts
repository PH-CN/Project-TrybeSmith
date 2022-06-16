import { NextFunction, Request, Response } from 'express';

const isDefined = (username: string, classe: string, level: number, password: string) => {
  if (!username) {
    return { error: true, message: '"username" is required' };
  }
  if (!classe) {
    return { error: true, message: '"classe" is required' };
  }
  if (!level) {
    return { error: true, message: '"level" is required' };
  }
  if (!password) {
    return { error: true, message: '"password" is required' };
  }
  return { error: false };
};

const typeCheck = (username: string, classe: string, level: number, password: string) => {
  if (typeof (username) !== 'string') {
    return { error: true, message: '"username" must be a string' };
  }
  if (typeof (classe) !== 'string') {
    return { error: true, message: '"classe" must be a string' };
  }
  if (typeof (level) !== 'number') {
    return { error: true, message: '"level" must be a number' };
  }
  if (typeof (password) !== 'string') {
    return { error: true, message: '"password" must be a string' };
  }
  return { error: false };
};

const lengthCheck = (username: string, classe: string, password: string) => {
  if (username.length < 3) {
    return { error: true, message: '"username" length must be at least 3 characters long' };
  }
  if (classe.length < 3) {
    return { error: true, message: '"classe" length must be at least 3 characters long' };
  }
  if (password.length < 8) {
    return { error: true, message: '"password" length must be at least 8 characters long' };
  }
  return { error: false };
};

const levelChecker = (level: number) => {
  if (level <= 0) {
    return { error: true, message: '"level" must be greater than or equal to 1' };
  }
  return { error: false };
};

const userFieldsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const levelCheck = levelChecker(level);
  
  if (levelCheck.error) {
    return res.status(422).json({ message: levelCheck.message });
  }

  const defined = isDefined(username, classe, level, password);
  
  if (defined.error) {
    return res.status(400).json({ message: defined.message });
  }

  const type = typeCheck(username, classe, level, password);

  if (type.error) {
    return res.status(422).json({ message: type.message });
  }

  const length = lengthCheck(username, classe, password);

  if (length.error) {
    return res.status(422).json({ message: length.message });
  }

  next();
};

export default userFieldsMiddleware;