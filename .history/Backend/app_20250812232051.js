const express = require('express');


const bcrypt = require('bcrypt');

const cors = require('cors');
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
const rateLimit = require('./Middleware/rateLimitMiddleware');

const authRoutes = require('./Routes/authRoutes');
const bookRoutes = require('./Routes/bookRoutes');
const userRoutes = require('./Routes/userRoutes');
const txRoutes = require('./Routes/transactionRoutes');
const reportRoutes = require('./Routes/reportRoutes');

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit);


app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transactions', txRoutes);
app.use('/api/reports', reportRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the INC Pustakalaya API');
});
app.get("/", (req, res) => {
    res.render("");
});



app.listen(5001,(req,res)=>{
    console.log("Server is running on port 5001");
})