const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const donutsRouter = require('./routes/donutsRoutes');
const app = express();
const port = 9000

app.use(express.json())
app.use(cors());

const url_mongo = 'mongodb+srv://celiamelendezr:6g0Qi0GdNkFtv1kY@project1.jwzic4h.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url_mongo);

// aquí hacemos la conexión con mongoose
const db = mongoose.connection;

// esto siguiente es para saber si ha habido algún error al conectarse a mongo
db.on("error", (error) => {
    console.log(`Error al conectar con mongo ${error}`);
});
// y esto es para saber si se ha conectado correctamente
db.on("connected", () => {
    console.log(`Succecss connect`);
});

db.on("disconected", () => {
    console.log(`Mongo is disconected`);
});


app.use('/donuts', donutsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
