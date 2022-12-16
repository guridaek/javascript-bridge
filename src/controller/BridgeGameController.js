const BridgeGame = require('../BridgeGame');
const { makeBridge } = require('../BridgeMaker');
const { GAME_STATE } = require('../constants/Constant');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printOpening();
    InputView.readBridgeSize(size => {
      this.#bridgeGame = new BridgeGame(makeBridge(+size, BridgeRandomNumberGenerator.generate));
    });

    this.proceedRound();
  }

  proceedRound() {
    InputView.readMoving(direction => {
      this.#bridgeGame.move(direction);
    });
    OutputView.printMap(this.#bridgeGame.getMap());

    const state = this.#bridgeGame.getGameState();
    if (state === GAME_STATE.ONGOING) this.proceedRound();
    if (state === GAME_STATE.FAILED) this.askRetry();
    if (state === GAME_STATE.SUCCEEDED) this.printResult();
  }

  askRetry() {
    InputView.readGameCommand(cmd => {
      if (cmd === 'R') {
        this.#bridgeGame.retry();
        this.proceedRound();
      } else if (cmd === 'Q') {
        this.printResult();
      }
    });
  }

  printResult() {}
}

module.exports = BridgeGameController;
