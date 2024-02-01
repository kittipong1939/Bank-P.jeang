require('dotenv').config()
const expores = require('express')
const cors =require('cors')
const notFound =require('./middlewares/notfound')
const errorMiddleware = require('./middlewares/error')
const authRouter = require('./routes/auth-route')
const app =express()

app.use(cors())
app.use(express.json())

app.use('/auth',authRouter)

app.use(notFound)

app.use(errorMiddleware)

let port= process.env.PORT || 8000
app.listen (port,()=> console.log('Server on Port :' ,port))