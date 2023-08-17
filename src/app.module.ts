import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => {
    console.log("sapia db is connected");
}).catch((e) => {
    console.log("no connection with sapia db");
}); 

app.listen(5001, () => {
    console.log('Server is running on port 5001');
  });