const Validation = {
  validateName: function (field, name, element) {
    const letters = /^[єЄіІїЇа-яА-Я-']+$/;
    if (!name) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (name.length < 2) {
    console.log(name.length)

      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити не менше двох символів`
      }
    } else if (!letters.test(name)) {
      element.className = 'invalid';
      return {
        message: `"${field}" може містити лише символи кирилиці і символи - та '`
      }
    } else if (name[0] !== name[0].toUpperCase()) {
      element.className = 'invalid';
      return {
        message: `${field} має починатись з велиої літери`
      }
    } else if (name[0] === '\'' || name[0] === '-'
      || name[name.length - 1] === '\'' || name[name.length - 1] === '-') {
        element.className = 'invalid';
      return {
        message: `${field} не може починатися і закінчуватися на символи - та '`
      }
    } else if (!name.includes('-')) {
      const namePart = name.slice(1);
      if (namePart !== namePart.toLowerCase()) {
        element.className = 'invalid';
        return {
          message: `${field} має містити лише першу велику літеру`
        }
      } else {
        element.className = 'valid';
        return null;
      }
    } else if (name.includes('-')) {
      const namePartArray = name.split('-');
      for (let i = 1; i < namePartArray.length; i++) {
        if (namePartArray[i][0] !== namePartArray[i][0].toUpperCase()) {
          element.className = 'invalid';
          return {
            message: `${field} має містити велику літеру після символу "-"`
          }
        }
      }
      element.className = 'valid';
      return null;
    } else {
      element.className = 'valid';
      return null;
    }
  },
  validateSeries: function (field, series, element) {
    const letters = /[а-яїіє]/i;
    if (!series) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (series.length !== 2) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити дві літери`
      }
    } else if (!letters.test(series)) {
      element.className = 'invalid';
      return {
        message: `"${field}" може містити лише символи кирилиці`
      }
    } else if (series !==series.toUpperCase()) {
      element.className = 'invalid';
      return {
        message: `${field} має містити лише великі літери`
      }
    } else {
      element.className = 'valid';
      return null;
    }
  },
  validateNumber: function (field, number, element) {
    const numbers = /^[0-9]+$/;
    if (!number) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (!numbers.test(number)) {
      element.className = 'invalid';
      return {
        message: `"${field}" може містити лише цифри`
      }
    } else if (number.length !== 8) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити 8 цифр`
      }
    } else {
      element.className = 'valid';
      return null;
    }
  },
  validatePassportNumber: function (field, number, element) {
    const numbers = /^[0-9]+$/;
    if (!number) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (!numbers.test(number)) {
      element.className = 'invalid';
      return {
        message: `"${field}" може містити лише цифри`
      }
    } else if (number.length !== 9) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити 9 цифр`
      }
    } else {
      element.className = 'valid';
      return null;
    }
  },
  validatePassportOrganization: function (field, number, element) {
    const numbers = /^[0-9]+$/;
    if (!number) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (!numbers.test(number)) {
      element.className = 'invalid';
      return {
        message: `"${field}" може містити лише цифри`
      }
    } else if (number.length !== 4) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити 4 цифри`
      }
    } else {
      element.className = 'valid';
      return null;
    }
  },
  validateTaxNumber: function (field, number, element) {
    const numbers = /^[0-9]+$/;
    if (!number) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (!numbers.test(number)) {
      element.className = 'invalid';
      return {
        message: `"${field}" може містити лише цифри`
      }
    } else if (number.length !== 10) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити 10 цифр`
      }
    } else {
      element.className = 'valid';
      return null;
    }
  },
  validateDate: function (field, date, element) {
    if (date) {
      element.className = 'valid';
      return null;
    } else {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    }
  },
  validateNotEmpty: function (field, job, element) {
    if (job) {
      element.className = 'valid';
      return null;
    } else {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    }
  },
  validateEmail: function (field, email, element) {
    const letters = /^\S+@\S+\.\S+$/;
    if (!email) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (email.length < 5) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити мінімум 5 символів`
      }
    } else if (!letters.test(email)) {
      element.className = 'invalid';
      return {
        message: `${field} може містити лише латинські літери, цифри і символи . та @`
      }
    } else {
      element.className = 'valid';
      return null;
    }
  },
}

export default Validation;
