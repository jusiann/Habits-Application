import express from 'express';
import "dotenv/config";
import authRoutes from './src/routes/auth.routes.js';
import {connectDB} from './src/lib/db.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/auth", authRoutes);

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
});