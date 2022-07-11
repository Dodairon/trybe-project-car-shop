import { Router } from 'express';
import postCarController from '../controllers/carControllers';

const carRoute = Router();

carRoute.post('/cars', postCarController);

export default carRoute;
