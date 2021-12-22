const mongoose=require('mongoose');
const Food=require('./models/food');

const Dummy_foods =[
    {
        name:'Amritsari Kulcha',
        desc : 'Authentic Punjabi Flavour ,Served with delicious Chole',
        price: 120
    },
    {
        name:'Stawberry Shake',
        desc : 'Fresh Stawberries From Farm',
        price: 150
    },
    {
        name:'Rajma Rice',
        desc : 'Served with curd',
        price: 60
    },
    {
        name:'Pizza',
        desc : 'Delicious toppings and rich in cheese pulls',
        price: 135
    },
    {
        name:'Ice Cream',
        desc : 'All Flavours',
        price: 100
    },
    {
        name:'Gulab Jamun',
        desc : 'Sweet',
        price: 120
    }
];

const seedDB=async()=>
{
    await Food.deleteMany({});
    await Food.insertMany(Dummy_foods);
    console.log("DB Seeded");
}

module.exports=seedDB;