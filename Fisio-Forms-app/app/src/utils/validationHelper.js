const validationHelper = {
  IsURLValid: (url) => {
    let isValid = false;
    if (url) {
      let regExp = new RegExp(
        "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
      );
      isValid = regExp.test(url);
    }
    return isValid || "The service URL is not valid";
  },
  IsNullOrEmpty: (value) => {
    let isNUllOrEmpty = true;
    if (value !== undefined) {
      let blankTextRegExp = new RegExp(/^\s*$/);
      isNUllOrEmpty = blankTextRegExp.test(value);
    }
    return !isNUllOrEmpty || "Este campo es obligatorio";
  },
  IsValidEmail: (email) => {
    let isValidEmail = false;
    let emailRegex = new RegExp(/.+@.+\..+/);
    isValidEmail = emailRegex.test(email);
    return isValidEmail || "El correo no es valido";
  },
  IsValidNumber: (number) => {
    let validNumberRegExp = new RegExp(/^\d+$/);
    return validNumberRegExp.test(number) || "This is not a valid number";
  },
  MaxLength: (value, maxLength) => {
    let isValid = false;
    if (!value || value.length <= maxLength) {
      isValid = true;
    }
    return isValid || `Max length is ${maxLength} characters`;
  },
};

export default validationHelper;
