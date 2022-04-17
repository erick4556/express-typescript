import express from "express"; //ESModules
// const require = require("express") //CommonJS

import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json()); //express.json middleware que transforma la req.body a un json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("Se recibio una peticion GET");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
