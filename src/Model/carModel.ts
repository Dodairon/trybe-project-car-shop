import { Schema, model } from 'mongoose';
import { Car } from '../interfaces/CarInterface';

const CarSchema = new Schema<Car>(
  {
    doorsQty: {
      type: Number,
      required: true,
    },
    seatsQty: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    buyValue: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export default model<Car>('Car', CarSchema);