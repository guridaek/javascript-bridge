const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame.js');
const { GameState } = require('./Constant.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validation = require('./Validation.js');

class App {
  #bridgeGame;

  play() {
    this.initBridgeGame();
  }

  initBridgeGame() {
    try {
      const bridgeSize = InputView.readBridgeSize();
      Validation.validateBridgeSize(bridgeSize);
      this.#bridgeGame = new BridgeGame(bridgeSize);
      this.playBridgeGame();
    } catch (err) {
      Console.print(err);
      this.initBridgeGame();
    }
  }

  playBridgeGame() {
    try {
      const direction = InputView.readMoving();
      Validation.validateMoving(direction);
      this.#bridgeGame.move(direction);
      OutputView.printMap();
      this.checkBridgeGame();
    } catch (err) {
      Console.print(err);
      this.playBridgeGame();
    }
  }

  checkBridgeGame() {
    const gameState = this.#bridgeGame.getGameState();
    if (gameState === GameState.PLAYING) this.playBridgeGame();
    if (gameState === GameState.GAME_OVER) this.requestRetryBridgeGame();
    if (gameState === GameState.VICTORY) this.endBridgeGame();
  }

  requestRetryBridgeGame() {
    try {
      const command = InputView.readGameCommand();
      Validation.validateGameCommand(command);
      if (command === 'R') this.retryBridgeGame();
      if (command === 'Q') this.endBridgeGame();
    } catch (err) {
      Console.print(err);
      this.requestRetryBridgeGame();
    }
  }

  retryBridgeGame() {
    this.#bridgeGame.retry();
    this.playBridgeGame();
  }

  endBridgeGame() {}
}

module.exports = App;
