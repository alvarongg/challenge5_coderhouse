# Challenge 5 - CoderHouse BackEnd

## Consigna:

* Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
    * Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
    * Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
    * Ambas páginas contarán con un botón que redirija a la otra.
* Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
* Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.


* Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué:

> RESPUESTA: Creo que con el engine que mas natural me fue trabajar fue handlebars , principalmente por la 
>  posiblidad de utilizar html puro e incorporar templates generales.
>  EJS me parece muy engorroso de utilizar y PUG sentí que es muy amigable pero me parece que es mucho mas difícil debugear por lo menos con la herramientas que conozco ahora. 


## Despliegue 📦

* Instalacion de depedencias
```bash
npm i 
```
* Ejecucion del proyecto handlebars
```bash
npm run start-hbs
```

* Ejecucion del proyecto pug
```bash
npm run start-pug
```

* Ejecucion del proyecto ejs
```bash
npm run start-ejs
```


## Construido con 🛠️

* [Express🛰️](https://expressjs.com/es/4x/api.html)
* [Handlebars](https://handlebarsjs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Ejs](https://ejs.co/)







