import { Router } from "express";
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
} from "../controllers/employeeController";

const router: Router = Router();

router.post("/create", createEmployee);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);
router.get("/all", getAllEmployees);

export default router;
