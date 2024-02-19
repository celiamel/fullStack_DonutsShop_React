const donutsDB = require("./donutsDB")

const find = (id) => {
    if (!id) {
        console.log(donutsDB)
        return donutsDB
    } else {
        const donut = donutsDB.find(d => d.id == id)
        return donut
    }
}


const newDonutModel = (id, name, type, price) => {
    donutsDB.push({
        id, name, type, price
    })
}


module.exports = { find, newDonutModel }