require('dotenv').config();
const path = require('path');
const cors = require ('cors');
const express =require('express');
const bodyParser =require('body-parser');
const routes = require('./src/routes/index');
const port = process.env.PORT || 3001

const app= express()


require('./src/db');
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', routes);

app.use('/', express.static(path.join(__dirname, '../client/public')))



app.listen(port, ()=>{
  console.log(`*****listening on port: ${port}*******`)
})
