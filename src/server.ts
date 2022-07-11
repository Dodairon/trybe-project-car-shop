import App from './app';
import carRoute from './routes/carRoute';

const server = new App();

server.addRouter(carRoute);

export default server;
