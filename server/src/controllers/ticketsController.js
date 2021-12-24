const getOneTicket = require('../services/ticketsService')

const getTicket = async(req, res) => {
    const { type, series, number, name, surname, patronymic } = req.query;

    ticket = await getOneTicket(type, series, number, name, surname, patronymic);
    console.log(ticket);
    res.json(ticket);
}


module.exports = getTicket;