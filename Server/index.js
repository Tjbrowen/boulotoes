const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(require('cookie-parser')());
app.use(require('cors')());

// Define routes
app.get('/api/data', async (req, res) => {
  const data = await prisma.someModel.findMany();
  res.json(data);
});

// Import and use existing routes
const { userRoute } = require("./routes/userRoute.js");
const { servicesRoute } = require("./routes/servicesRoute.js");
const { projectsRoute } = require("./routes/projectsRoute.js");

app.use("/api/user", userRoute);
app.use("/api/services", servicesRoute);
app.use("/api/projects", projectsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

