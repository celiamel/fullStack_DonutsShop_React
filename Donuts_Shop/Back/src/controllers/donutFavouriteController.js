const donutsDB = require("../mocks/donutsDB")
const donutFavouriteModel = require("../models/donutFavourite")

const getFavourites = async (req, res) => {
    try {
        const donutId = req.donut.id;
        const donut = await donutFavouriteModel.findById(donutId).populate('favourites');
        if (!donut) {
            return res.status(404).json({ status: "failed", data: null, error: "Donut no encontrado" });
        }
        const favourites = donutFavourite.favourites;
        return res.status(200).json({ status: "succeeded", data: favourites, error: null });
    } catch (error) {
        return res.status(500).json({ status: "error", data: null, error: error.message });
    }
};

const addToFavourites = async (req, res) => {
    try {
        const donutId = req.donut.id;
        const donut = await donutFavouriteModel.findById(donutId);

        if (!donut) {
            return res.status(404).json({ status: "failed", data: null, error: "Donut no encontrado" });
        }

        if (donut.favourites.includes(donutId)) {
            return res.status(400).json({ status: "failed", data: null, error: "El donut ya está en favoritos" });
        }

        donut.favourites.push(donutId);
        await user.save();
        return res.status(200).json({ status: "succeeded", data: donut.favourites, error: null });
    } catch (error) {
        return res.status(500).json({ status: "error", data: null, error: error.message });
    }
};


const removeFromFavourites = async (req, res) => {
    try {
        const donutId = req.donut.id;
        const donut = await donutFavouriteModel.findById(donutId);

        if (!donut) {
            return res.status(404).json({ status: "failed", data: null, error: "Donut no encontrado" });
        }

        if (!donut.favourites.includes(donutId)) {
            return res.status(400).json({ status: "failed", data: null, error: "El donut no está en favoritos" });
        }

        await donut.save();
        return res.status(200).json({ status: "succeeded", data: donut.favourites, error: null });
    } catch (error) {
        return res.status(500).json({ status: "error", data: null, error: error.message });
    }
};

module.exports = {
    getFavourites,
    addToFavourites,
    removeFromFavourites,
}

