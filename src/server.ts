const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
app.listen(process.env.PORT, ()=> console.log(`App listening on port ${process.env.PORT}`));