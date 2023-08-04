import request from "supertest";
import app from "../app";
import Employee from "../src/models/employeeModel";

describe("Employee Controller", () => {
  const employeeData = {
    name: "John Doe",
    title: "Software Engineer",
    department: "Tech",
    annualSalary: 60000,
  };
  async function createEmployeeAndGetId() {
    const response = await request(app)
      .post("/api/employee/create")
      .send(employeeData);
    return response.body._id;
  }

  it("should create a new employee", async () => {
    const response = await request(app)
      .post("/api/employee/create")
      .send(employeeData);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(employeeData);
  });

  it("should update an existing employee", async () => {
    const id = await createEmployeeAndGetId();
    const updateData = { department: "HR", annualSalary: 70000 };
    const response = await request(app)
      .put(`/api/employee/update/${id}`)
      .send(updateData);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ ...employeeData, ...updateData });
  });

  it("should mark an employee as deleted", async () => {
    const id = await createEmployeeAndGetId();
    const response = await request(app).delete(`/api/employee/delete/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.deleted).toBe(true);
  });

  afterAll(async () => {
    await Employee.deleteMany({});
  });
});
