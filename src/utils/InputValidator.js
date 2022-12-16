const { ERROR_MSG } = require('../constants/String');

const InputValidator = Object.freeze({
  bridgeSize(size) {
    if (/^[0-9]+$/.test(size) === false) {
      throw new Error(ERROR_MSG.NOT_NUMBER);
    }
    if (+size < 3 || +size > 20) {
      throw new Error(ERROR_MSG.BRIDGE_SIZE_RANGE);
    }
  },

  moving(direction) {
    if (['U', 'D'].includes(direction) === false) {
      throw new Error(ERROR_MSG.INVALID_DIRECTION);
    }
  },
});

module.exports = InputValidator;
