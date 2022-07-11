import { RequestHandler } from 'express';
import postCar from '../Service/carService';

const postCarController: RequestHandler = async (req, res) => {
  try {
    const newCar = await postCar(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export default postCarController;
