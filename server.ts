import { createRequestHandler } from "@remix-run/express";
import * as build from "@remix-run/dev/server-build"; 
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  createRequestHandler({
    build, 
    getLoadContext() {
      return { env: process.env };
    },
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Remix app running at http://localhost:${PORT}`);
});
