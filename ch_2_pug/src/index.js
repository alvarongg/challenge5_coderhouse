const express = require("express");
const productRouter = require("./productRouter.js");
const path = require('path');
const app = express();

let views_path = path.join(__dirname, '..', 'views');


app.set('views', views_path);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/productos", productRouter);

app.listen(8081, () => {
  console.log("Estoy escuchando 8081 -- engine pug");
});
