const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(pino);
const port = 8000;

const data = require('./content/charities')

let serviceSID;
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post('/message', (req, res) => {
  res.header('Content-Type', 'application/json');
  const charityDetails = data.filter((charity) => charity.name === req.body.name);
  client.messages
  .create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.number,
    body: JSON.stringify(charityDetails)
  })
  .then(() => {
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
});

app.listen(port, () => console.log(console.log(`🚀 Server ready at localhost:${port}`)))
