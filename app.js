const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed');
const cors=require('cors');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err));

// seedDB();

app.use(cors());
app.use(express.json());


const foodRoutes=require('./api/foodRoutes');

app.get('/hello',(req,res)=>
{
    res.status(200).json({msg:`Hello from Server`});
})

app.use(foodRoutes);


const port=process.env.PORT || 8080;
app.listen(port,()=>
{
    console.log(`Server running at ${port}`);
})