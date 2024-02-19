

const { getDonuts, loadData, getDonutById, createDonut, updateDonut, deleteDonut } = require('../controllers/donutController')

const donutsRouter = require('express').Router()

//PASO 1 -> Tenemos 5 rutas/cosas que podemos hacer, las cuales hacen peticiones al back directamente
donutsRouter.get('/', getDonuts)
donutsRouter.post('/', createDonut)
donutsRouter.get('/loadData', loadData)
donutsRouter.get('/:id', getDonutById)
donutsRouter.put('/:id', updateDonut)
donutsRouter.delete('/:id', deleteDonut)

module.exports = donutsRouter
