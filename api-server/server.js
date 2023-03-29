const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();

app.use(morgan('dev'));
// app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    group: 'Bears',
    numberOfStudents: 15,
  });
});

app.listen(3005, () => console.log('Api server has started on port 3005'));
