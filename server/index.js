const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));
// app.use(pino);
const port = 8000;

const data = require("./content/charities");

let serviceSID;
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

function constuctMessage(content) {
  content = content[0];
  var webpage = content.webpage || "Not Provided";
  var contactNumber = content.contact || "Not Provided";
  var easyPaisa = content.easyPaisa || "Not Provided";
  var bankDetails = content.bankDetails[0];
  var accountTitle = bankDetails.accountTitle || "Not Provided";
  var bankName = bankDetails.bankName || "Not Provided";
  var accountNumber = bankDetails.accountNumber || "Not Provided";
  var iban = bankDetails.iban || "Not Provided";
  var message = `Charity name: ${content.name}\nwebsite: ${webpage}\nContact Number: ${contactNumber}\nEasyPaisa: ${easyPaisa}\nBank Details are as follows\nAccount Title: ${accountTitle}\nBank Name: ${bankName}\nAccount Number: ${accountNumber}\nIBAN: ${iban}\nRamadan Mubarak!`;
  return message;
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/message", (req, res) => {
  res.header("Content-Type", "application/json");
  const charityDetails = data.filter(
    (charity) => charity.name === req.body.name
  );
  var msg = constuctMessage(charityDetails);
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.number,
      body: msg,
    })
    .then(() => {
      console.log("Message sent succesfully");
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(port, () =>
  console.log(console.log(`🚀 Server ready at localhost:${port}`))
);
