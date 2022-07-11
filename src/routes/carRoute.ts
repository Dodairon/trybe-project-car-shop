import { Router } from 'express';
import carControllers from '../controllers/carControllers';
import carMidd from '../Middlewares/carMidd';

const carRoute = Router();

carRoute.post('/cars', carControllers.postCarController);
carRoute.get('/cars', carControllers.getAllCarsController);
carRoute.get('/cars/:id', carMidd, carControllers.getCarByIdController);

export default carRoute;
