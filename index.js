import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// importing user routes
import userRoutes from "./routes/user.js";
// using user routes
app.use("/api/users", userRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectDb();
});