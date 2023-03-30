import express from "express";
import cors from "cors";

import bookRoutes from "./routes/book.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(bookRoutes);

export default app;
