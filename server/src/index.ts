import express from "express";
import { connect } from "mongoose";
import { MONGODB_URL } from "./constants";

const app = express();

connect(MONGODB_URL).then(() => {
  app.listen(3001, () => {
    console.log(`Server Started`);
  });
});
