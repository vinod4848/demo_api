import mongoose, { Schema, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  title: string;
  department: "HR" | "Tech" | "Product" | "Leadership";
  annualSalary: number;
  deleted: boolean;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  department: {
    type: String,
    required: true,
    enum: ["HR", "Tech", "Product", "Leadership"],
  },
  annualSalary: { type: Number, required: true },
  deleted: { type: Boolean, default: false },
});

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
