const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  let data = {
    id: "JS0001",
    firstName: "John",
    lastName: "Smith",
    age: 30,
    jobTitle: "Frontend Developer",
    jobCategory: "IT",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£34,5000",
  };
  const result = res.json(data);
  console.log(`The result is :`);
    console.log(result);
});

app.post('/jobTitle', (req,res)=>{
    let searchJobTitle = req.body.jobTitle
    console.log(`Searching ${searchJobTitle}`);
   let requestData = employeeProfile.filter((job)=> job.jobTitle === searchJobTitle || job.jobCategory === searchJobTitle);
   console.log(`Searching: ${requestData}`)
   res.json(requestData);
})

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

const employeeProfile = [
  {
    id: "JS0001",
    firstName: "John",
    lastName: "Smith",
    age: 30,
    jobTitle: "Frontend Developer",
    jobCategory: "IT",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£34,5000",
  },

  {
    id: "SA0002",
    firstName: "Success",
    lastName: "Ade",
    age: 27,
    jobTitle: "Maintenance Manager",
    jobCategory: "Engineering",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£64,5000",
  },

  {
    id: "WM0003",
    firstName: "Will",
    lastName: "Michael",
    age: 47,
    jobTitle: "Senior Accounting Manager",
    jobCategory: "Accountant",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£64,5000",
  },

  {
    id: "JS0004",
    firstName: "John",
    lastName: "smith",
    age: 42,
    jobTitle: "Senior Software Engineer",
    jobCategory: "IT",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£65,9000",
  },

  {
    id: "EL0002",
    firstName: "Endurance",
    lastName: "Lade",
    age: 37,
    jobTitle: "Junior Backend developer",
    jobCategory: "IT",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£44,5000",
  },

  {
    id: "SD0002",
    firstName: "Success",
    lastName: "Deji",
    age: 47,
    jobTitle: "Senior Mechanical Engineer",
    jobCategory: "Engineering",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£64,5000",
  },

  {
    id: "SM0002",
    firstName: "Success",
    lastName: "mike",
    age: 37,
    jobTitle: "Payroll Manager",
    jobCategory: "Accounting",
    postCode: "CF37 2NR",
    phoneNumber: "123",
    annualSalary: "£54,5000",
  },
];
