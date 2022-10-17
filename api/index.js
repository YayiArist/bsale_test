const express =require('express');
const bodyParser =require('body-parser');
const routes = require('./src/routes/index');
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const port = process.env.PORT || 3001

const app= express()


require('./src/db');

app.options("*", cors());
app.name = "API";

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next()
});

app.use(cors());

app.use('/api', routes);

app.use('/', express.static(path.join(__dirname, '../client/public')))

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});



app.listen(port, ()=>{
  console.log(`*****listening on port: ${port}*******`)
})

module.exports = app;
