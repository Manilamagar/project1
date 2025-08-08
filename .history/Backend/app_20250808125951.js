const express = require('express');

const app = express();
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Welcome to the INC Pustakalaya API');
});
app.get("/", (req, res) => {
    res.render("");
});



app.listen(5001,(req,res)=>{
    console.log("Server is running on port 5000");
})