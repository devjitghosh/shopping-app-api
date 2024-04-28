import dotenv from'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from'./app';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
app.listen(process.env.PORT, ()=> console.log(`App listening on port ${process.env.PORT}`));