const express = require("express");
const productRouter = require("./productRouter.js");
const path = require('path');
const app = express();

let views_path = path.join(__dirname, '..', 'views');


app.set('views', views_path);
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/productos", productRouter);

app.listen(8082, () => {
  console.log("Estoy escuchando 8082 -- engine ejs");
});
