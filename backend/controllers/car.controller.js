const Car = require('../models/Car');

//Метод контроллера для получения всех записей
const getAll = async (req, res) => {
    try {
        const cars = await Car.getAll();
        res.json(cars);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Метод контроллера для создания новой записи
const create = async (req, res) => {
    try {
        const data = await req.body;
        const response = await Car.create(data);
        res.json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getAll,
    create,
}