 <!-- demo_api

 npm install

 start script:= npm run dev

postman collection response

Post: http://localhost:3000/api/employee/create
{
"name": "abhilash sharma",
"title": "Software Engineer",
"department": "HR",
"annualSalary": 80000
}

Get:http://localhost:3000/api/employee/all
[
{
"_id": "64ccee16e6645857f9193998",
"name": "vinod kumar",
"title": "Software Engineer",
"department": "Tech",
"annualSalary": 60000,
"deleted": false,
"__v": 0
},
{
"_id": "64ccee7ee6645857f919399a",
"name": "Sahil Singh",
"title": "Software Engineer",
"department": "Leadership",
"annualSalary": 60000,
"deleted": false,
"__v": 0
},
{
"_id": "64cceec5e6645857f919399c",
"name": "Arjun Singh",
"title": "Software Engineer",
"department": "Product",
"annualSalary": 70000,
"deleted": false,
"__v": 0
},
]

Put: http://localhost:3000/api/employee/update/64cceec5e6645857f919399c
{
"name": "Abhilash sharma",
"title": "Software Engineer",
"department": "HR",
"annualSalary": 80000
}

Delete : http://localhost:3000/api/employee/delete/64ccf83a34dae6af9e54eba -->
