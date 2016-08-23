import * as rules from './rules';

class Validator {
  constructor(rules) {
    this.rules = rules;
  }

  createValidator(validationRules, state, field = null) {
    const errors = {};
    let isValid = true;

    if (!field) {
      return this.validateForm(validationRules, state);
    }

    return this.validateElement(validationRules, state, field);
  }

  validate(stringRules, state, field) {
    const fieldRules = this.getFieldRules(stringRules, field);
    const rule = this.rules.join([].concat(fieldRules));
    const errorMessage = rule(state[field], state);

    return errorMessage;
  }

  getFieldRules(stringRules, field) {
    return stringRules[field].map(stringRule => {
      const splitRule = stringRule.split('|');
      const functionName = splitRule[0];
      const args = splitRule[1];

      if (args) {
        return this.rules[functionName](args);
      }

      return this.rules[stringRule];
    });
  }

  validateElement(validationRules, state, field) {
    const errors = {};
    const errorMessage = this.validate(validationRules, state, field);

    if (errorMessage) {
      errors[field] = errorMessage;
    }

    let isValid = this.isValid(errors);

    return { isValid, errors };
  }

  validateForm(validationRules, state) {
    const errors = {};

    Object.keys(validationRules).forEach((field) => {
      const errorMessage = this.validate(validationRules, state, field);

      if (errorMessage) {
        errors[field] = errorMessage;
      }
    });

    let isValid = this.isValid(errors);

    return { isValid, errors };
  }

  isValid(errors) {
    return !! (Object.keys(errors).length == 0);
  }
}

export default new Validator(rules);
