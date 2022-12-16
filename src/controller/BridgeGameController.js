const BridgeGame = require('../BridgeGame');
const { makeBridge } = require('../BridgeMaker');
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
  }

  proceedRound() {
    InputView.readMoving(direction => {
      this.#bridgeGame.move(direction);
    });
  }
}

module.exports = BridgeGameController;
