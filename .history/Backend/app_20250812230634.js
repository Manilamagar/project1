const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
const rateLimit = require('./iddleware/rateLimitMiddleware');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const txRoutes = require('./routes/transactionRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to the INC Pustakalaya API');
});
app.get("/", (req, res) => {
    res.render("");
});



app.listen(5001,(req,res)=>{
    console.log("Server is running on port 5001");
})