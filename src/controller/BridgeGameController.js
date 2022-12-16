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

    if (this.#bridgeGame.getGameState() === GAME_STATE.ONGOING) this.proceedRound();
  }
}

module.exports = BridgeGameController;
