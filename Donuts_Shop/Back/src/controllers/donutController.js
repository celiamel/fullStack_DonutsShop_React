const donutsDB = require("../mocks/donutsDB")
const donutModel = require("../models/Donut")

//GET ALL DONUTS
const getDonuts = async (req, res) => {
    try {

        const allDonuts = await donutModel.find()
        const resDonut = allDonuts.map(donut => {
            return {
                id: donut.id,
                name: donut.name,
                type: donut.type
            }
        })
        res.status(200).json({
            status: 'succeeded',
            data: resDonut,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message });
    }
}

//GET DONUT BY ID
const getDonutById = async (req, res) => {
    try {
        const id = req.params.id
        const donut = await donutModel.findById(id)
        console.log(donut)
        res.status(200).json({
            status: 'succeeded',
            data: donut,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message });
    }
}

const createDonut = async (req, res) => {
    try {
        const donutData = req.body
        const newDonut = await donutModel({
            nombre: donutData.name,
            type: donutData.type,
            price: donutData.price
        })
        await newDonut.save()
        console.log(newDonut)
        res.status(200).json({
            status: 'succeeded',
            data: newDonut,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message });
    }
}


const updateDonut = async (req, res) => {
    try {
        const id = req.params.id
        const { name, type, price } = req.body

        const donutAux = await donutModel.findById(id)

        if (!donutAux) return res.status(404).send('El donut no existe')

        if (name) {
            donutAux.name = name
        }
        if (type) {
            donutAux.type = type
        }
        if (price) {
            donutAux.price = price
        }

        await donutAux.save()

        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message });
    }
}

const deleteDonut = async (req, res) => {
    try {
        const id = req.params.id
        await donutModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message });
    }
}

//Load initial data
const loadData = async (req, res) => {
    try {
        donutsDB.map(async (donut) => {
            const newDonut = donutModel({
                name: donut.name,
                type: donut.type,
                price: donut.price,
            })
            await newDonut.save()
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getDonuts,
    getDonutById,
    createDonut,
    updateDonut,
    deleteDonut,
    loadData,
}