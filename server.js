import express from "express";
import Route from "./App/routes/Route.js";

const app = express();
const PORT = 8000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Backend is running at Port ${PORT}`);
});

Route(app);
app.listen(PORT, () => {
  console.log(`Backend is running at Port ${PORT}`);
});
