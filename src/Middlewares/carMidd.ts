import { RequestHandler } from 'express';

const carMidd: RequestHandler = async (req, res, next) => {
  const request = req.params.id;
  if (request.length < 24) {
    return res
      .status(400)
      .json({ error: 'Id must have 24 hexadecimal characters' });
  }
  next();
};

export default carMidd;
