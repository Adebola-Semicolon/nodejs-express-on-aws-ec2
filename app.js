const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Node Express Demo App v2</h1> <h4>Message: Success v2</h4> <p>Version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    },
     {
      productId: '103',
      price: 100
    },
     {
      productId: '104',
      price: 100
    },
     {
      productId: '105',
      price: 100
    },
     {
      productId: '106',
      price: 100
    }   
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
