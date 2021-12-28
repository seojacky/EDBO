const Validation = {
  validateName: function (field, name, element) {
    const letters = /^[єЄіІїЇа-яА-Я-']+$/;
    if (!name) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" не може бути пустим`
      }
    } else if (name.length < 2) {
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
  validatePassportNumber: function (field, number, element, amount) {
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
    } else if (number.length !== amount) {
      element.className = 'invalid';
      return {
        message: `Поле "${field}" має містити ${amount} цифр`
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
  validateDateRange: function (startDate, element1, endDate, element2) {
    if (startDate && endDate) {
      element1.className = 'valid';
      element2.className = 'valid';
      return {
        message: null,
        field1: true,
        field2: true
      }
    } else if (!startDate && !endDate) {
      element1.className = 'invalid';
      element2.className = 'invalid';
      return {
        message: `Поля не можуть бути пустим`,
        field1: false,
        field2: false
      }
    } else if (!startDate) {
      element1.className = 'invalid';
      element2.className = 'valid';
      return {
        message: `Перше поле не може бути пустим`,
        field1: false,
        field2: true
      }
    } else if (!endDate) {
      element1.className = 'valid';
      element2.className = 'invalid';
      return {
        message: `Друге поле не може бути пустим`,
        field1: true,
        field2: false
      }
    }
  },
  validateNotEmpty: function (field, value, element) {
    if (value) {
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
