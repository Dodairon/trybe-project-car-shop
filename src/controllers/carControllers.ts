import { RequestHandler } from 'express';
import carService from '../Service/carService';

const postCarController: RequestHandler = async (req, res) => {
  try {
    const newCar = await carService.postCar(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const getAllCarsController: RequestHandler = async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const getCarByIdController: RequestHandler = async (req, res) => {
  try {
    const car = await carService.getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Object not found' });
    }
    return res.status(200).json(car);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

const updateCarController: RequestHandler = async (req, res) => {
  try {
    const car = await carService.updateCar(req.params.id, req.body);
    if (!car) {
      return res.status(404).json({ error: 'Object not found' });
    }
    return res.status(200).json(car);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export default {
  postCarController,
  getAllCarsController,
  getCarByIdController,
  updateCarController,
};
