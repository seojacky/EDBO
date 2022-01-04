const getOneTicket = require('../services/ticketsService')
const { InvalidRequestError } = require('../utils/errors')

const getTicket = async(req, res) => {
    const { type, series, number, name, surname, patronymic } = req.query;
    if (type == "Учнівський квиток") {
        type_int = 1
    } else {
        type_int = 0
    }
    const ticket = await getOneTicket(type_int, series, number, name, surname, patronymic);
    if (!ticket) {
        throw new InvalidRequestError('Немає записів з такими даними!')
    }
    if (ticket.end_date > Date.now()) {
        ticket.status = "Активний"
    } else {
        ticket.status = "Неактивний"
    }
    ticket.type = type;
    ticket.surname = surname;
    ticket.name = name;
    ticket.patronymic = patronymic;
    res.status(200).json(ticket)
}

const createTicket = async(req, res) => {
    // const { type, series, number, name, surname, patronymic } = req.body;
    // const ticket = await createOneTicket();
    res.json();
}

const updateTicket = async(req, res) => {
    // const { type, series, number, name, surname, patronymic } = req.body;
    // const ticket = await updateOneTicket();
    // res.json();
}

module.exports = { getTicket, createTicket, updateTicket };