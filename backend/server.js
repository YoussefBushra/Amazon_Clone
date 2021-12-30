import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(`mongodb+srv://Amazon:${process.env.PASS}@amazon.sgegu.mongodb.net/Amazon?retryWrites=true&w=majority`, {
});

mongoose.connection.on('connection', () => {
  console.log('connected to DB');
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
  res.send('Live is ready');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT; // || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
