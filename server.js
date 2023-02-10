const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    occupation: "Frontend Developer",
    postCode: "CF37 2NR",
    phoneNumber: "123",
  };
  const result = res.json(data);
  console.log(`The result is : ${result}`);
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
