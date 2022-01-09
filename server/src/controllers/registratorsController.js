const { getAllRegistrators, getAllQueries, getJournalById, changeStatusById, createOneQuery } = require('../services/registratorsService')

const getRegistrators = async (req, res) => {
  const registrators = await getAllRegistrators();
  res.status(200).json(registrators)
}

const getQueries = async (req, res) => {
  const queries = await getAllQueries();
  res.status(200).json(queries)
}


const getJournal = async (req, res) => {
  const { registrator_id } = req.query;
  const journal = await getJournalById(registrator_id);
  res.status(200).json(journal)
}


const approveRegistrator = async (req, res) => { }


const rejectRegistrator = async (req, res) => { }


const changeStatus = async (req, res) => {
  const { registrator_id } = req.query;
  try {
    await changeStatusById(registrator_id);
    res.status(200).json({ "message": "Статус змінено успішно" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


const updateRegistrator = async (req, res) => { }

const createQuery = (async (req, res) => {
  const { email, name, surname, patronymic, identification_code, p_series, p_number, issue_date, authority_code, position, organization_name, birthday_date } = req.body;
  try {
    await createOneQuery({ email, name, surname, patronymic, identification_code, p_series, p_number, issue_date, authority_code, position, organization_name, birthday_date });
    res.json({ message: 'Success!' });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});





module.exports = { createQuery, getRegistrators, getQueries, getJournal, approveRegistrator, rejectRegistrator, changeStatus, updateRegistrator };