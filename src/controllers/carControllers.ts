import { RequestHandler } from 'express';
import {
  deleteCar,
  getAllCars,
  getCarById,
  postCar,
  updateCar,
} from '../services/carService';

const errorObject = 'Object not found';

const postCarController: RequestHandler = async (req, res) => {
  try {
    const newCar = await postCar(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const getAllCarsController: RequestHandler = async (req, res) => {
  try {
    const cars = await getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const getCarByIdController: RequestHandler = async (req, res) => {
  try {
    const car = await getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: errorObject });
    }
    return res.status(200).json(car);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

const updateCarController: RequestHandler = async (req, res) => {
  try {
    const car = await updateCar(req.params.id, req.body);
    if (!car) {
      return res.status(404).json({ error: errorObject });
    }
    return res.status(200).json(car);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

const deleteCarController: RequestHandler = async (req, res) => {
  try {
    const car = await deleteCar(req.params.id);
    if (!car) {
      return res.status(404).json({ error: errorObject });
    }
    return res.status(204).json(car);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
};

export default {
  postCarController,
  getAllCarsController,
  getCarByIdController,
  updateCarController,
  deleteCarController,
};
