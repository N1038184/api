const express = require("express");

const app = express();
const port = 3000;
//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let stocks = [{
    CompanyName: "Techno",
    CompanySymbol: "Tech",
    avaliableshares: "1000",
    Currency:"pound",
    Price:"£100",
    updateddate:"2022-02-02",
},
];

// get the stock list in the form of JSON
app.get('/stock',(req,res) =>{
    res.json(stocks);
});
// add stock to the list
app.post('/stock',(req,res)=>{
    const stock = req.body;

    console.log(stock);
    movies.push(stock);
    res.send("stock is added to the list!");
});

//search for a stock in the list
app.get('/stock/:id',(req,res)=>{
    const id = req.params.id

    for(let stock of stocks){
        if(stock.id === id){
            res.json(stock)
            return
        }
    }
    res.status(404).send('Stock not found');
});
// remove stock from the list
app.delete("/stock/:id",(req,res)=>{
    const id = req.params.id;
    stocks=stocks.filter((stock)=>{
        if(stock.id!==id){
            return true;
        }
        return false;
    });
    res.send('Stock is deleted')
});

// set the server to listen at part
app.listen(port,() => console.log('Server listening at port ${port}'));