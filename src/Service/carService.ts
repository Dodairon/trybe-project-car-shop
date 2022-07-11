import carModel from '../Model/carModel';
import { CarSchema, Car } from '../interfaces/CarInterface';

export default function postCar(car: Car) {
  CarSchema.parse(car);
  return carModel.create(car);
}
