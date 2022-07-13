import carModel from '../models/carModel';
import { CarSchema, Car } from '../interfaces/CarInterface';

function postCar(car: Car) {
  CarSchema.parse(car);
  return carModel.create(car);
}

function getAllCars() {
  return carModel.find();
}

function getCarById(id: string) {
  return carModel.findById(id);
}

function updateCar(id: string, car: Car) {
  CarSchema.parse(car);
  return carModel.findByIdAndUpdate(id, car);
}

function deleteCar(id: string) {
  return carModel.findByIdAndDelete(id);
}

export { postCar, getAllCars, getCarById, updateCar, deleteCar };
