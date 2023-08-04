import { Request, Response } from "express";
import Employee, { IEmployee } from "../models/employeeModel";
import logger from "../utils/logger";

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employeeData: IEmployee = req.body;
    if (!employeeData.name || !employeeData.department) {
      return res
        .status(400)
        .json({ error: "Name and department are required" });
    }

    const employee = await Employee.create(employeeData);
    logger.log(`Employee created: ${employee}`);
    res.status(201).json(employee);
  } catch (err) {
    logger.error(`Error creating employee: ${err}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData: Partial<IEmployee> = req.body;
    const existingEmployee = await Employee.findById(id);
    if (!existingEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const employee = await Employee.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    logger.log(`Employee updated: ${employee}`);
    res.json(employee);
  } catch (err) {
    logger.error(`Error updating employee: ${err}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existingEmployee = await Employee.findById(id);
    if (!existingEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const employee = await Employee.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
    );

    logger.log(`Employee deleted: ${employee}`);
    res.json(employee);
  } catch (err) {
    logger.error(`Error deleting employee: ${err}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find({ deleted: false });
    logger.log(`Fetched All Employees`);
    res.json(employees);
  } catch (err) {
    logger.error(`Error fetching employees: ${err}`);
    res.status(500).json({ error: "Server error" });
  }
};
