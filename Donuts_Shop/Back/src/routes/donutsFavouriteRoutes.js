const { getFavourites, addToFavourites, removeFromFavourites } = require("../controllers/donutFavouriteController")
const favouriterouter = require('express').Router()

favouriterouter.get('/favourite', getFavourites);
favouriterouter.post('/:idDonut/addfavourite', addToFavourites);
favouriterouter.delete('/:idDonut/deletefavourite', removeFromFavourites);

module.exports = favouriterouter; 