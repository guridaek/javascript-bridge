const { Console } = require('@woowacourse/mission-utils');
const { QUERY } = require('../constants/String');
const InputValidator = require('../utils/InputValidator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    try {
      this.getUserInput(callback, QUERY.BRIDGE_SIZE, InputValidator.bridgeSize);
    } catch (err) {
      Console.print(err.message);
      this.readBridgeSize(callback);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    try {
      this.getUserInput(callback, QUERY.MOVING, InputValidator.moving);
    } catch (err) {
      Console.print(err.message);
      this.readMoving(callback);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  getUserInput(callback, query, validator) {
    Console.readLine(query, input => {
      validator(input);
      callback(input);
    });
  },
};

module.exports = InputView;
