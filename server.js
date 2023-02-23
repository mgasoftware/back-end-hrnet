require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express()
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());

const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

app.listen(8080, () => console.log("Server Started on 8080"));