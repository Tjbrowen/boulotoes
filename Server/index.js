import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { servicesRoute } from "./routes/servicesRoute.js";
import { projectsRoute } from "./routes/projetsRoute.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/api/user", userRoute);
app.use("/api/services", servicesRoute);
app.use("/api/projects", projectsRoute);