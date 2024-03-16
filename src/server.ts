import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { connect } from './db/mongodb.config';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '1000mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
  })
);

app.use('/v1', router);

const PORT: string | number = process.env.PORT || 4000;

const db = async () => {
  try {
    await connect(process.env.MONGO_URI!);
    app.listen(PORT, (): void => {
      console.log('connected to DB and server is running on port ' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

db();
