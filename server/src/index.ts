import express from "express";
import { connect } from "mongoose";
import { MONGODB_URL } from "./constants";
import { AuthRouter } from "./Routes";

const app = express();
app.use(express.json());

app.use("/auth", AuthRouter);

connect(MONGODB_URL).then(() => {
  app.listen(3001, () => {
    console.log(`Server Started`);
  });
});
