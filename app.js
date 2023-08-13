require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.DB_PORT;
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
