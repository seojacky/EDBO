const getOneTicket = require('../services/authService')

const getTicket = async(req, res) => {
    const type = req.query.type;
    const series = req.query.series;
    const number = req.query.number;
    const name = req.query.name;
    const surname = req.query.surname;
    const patronymic = req.query.patronymic;

    ticket = await getOneTicket(type, series, number, name, surname, patronymic);
    console.log(ticket);
    res.json(ticket);
}


module.exports = getTicket;