import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import planetRoutes from "./routes/planetRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
//middleware
app.use(express.json());
app.use("/api/planets", planetRoutes);
app.use("/api/users", userRoutes);

const port = 6754;
dotenv.config();

//mongoose connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.error('MongoDB connection error:', err));

//test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(6754, () => {
  console.log('Server is running on port 6754');
});
