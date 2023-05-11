import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'
import categoryRoutes from './routes/category.js'
import productRoutes from './routes/product.js'
import morgan from 'morgan'
import cors from 'cors'

const app = express()  

dotenv.config( )


//connect db to mongoose

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`connected to ${connect.connection.host}`);
  } catch (error) {
    console.error(`error connecting to db ${error}`);
  }
};

connectDB()


app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


app.use("/api", authRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)

const port = process.env.PORT || 8000




app.listen(port, () => console.log(`Server running on port ${port}`))
