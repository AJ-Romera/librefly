import express from "express";
import cors from "cors";

import bookRoutes from "./routes/book.routes";
import authorRoutes from "./routes/author.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(bookRoutes);
app.use(authorRoutes);

export default app;
