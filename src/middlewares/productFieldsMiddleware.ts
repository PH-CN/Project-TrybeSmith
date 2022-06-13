import { NextFunction, Request, Response } from 'express';

const isDefined = (name: string, amount: string) => {
  if (!name) {
    return { error: true, message: '"name" is required' };
  }
  if (!amount) {
    return { error: true, message: '"amount" is required' };
  }
  return { error: false };
};

const isString = (name: string, amount: string) => {
  if (typeof (name) !== 'string') {
    return { error: true, message: '"name" must be a string' };
  }
  if (typeof (amount) !== 'string') {
    return { error: true, message: '"amount" must be a string' };
  }
  return { error: false };
};

const isLengthOk = (name: string, amount: string) => {
  if (name && name.length < 3) {
    return { error: true, message: '"name" length must be at least 3 characters long' };
  }
  if (amount && amount.length < 3) {
    return { error: true, message: '"amount" length must be at least 3 characters long' };
  }
  return { error: false };
};

const productsFieldsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const defined = isDefined(name, amount);
  const string = isString(name, amount);
  const length = isLengthOk(name, amount);

  if (defined.error) {
    return res.status(400).json({ message: defined.message });
  }

  if (string.error) {
    return res.status(422).json({ message: string.message });
  }

  if (length.error) {
    return res.status(422).json({ message: length.message });
  }

  next();
};

export default productsFieldsMiddleware;