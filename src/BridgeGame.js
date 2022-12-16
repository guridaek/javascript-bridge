const { GAME_STATE } = require('./constants/Constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #map;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#map = [[], []];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#map.forEach((line, idx) => {
      if (direction !== this.mapIndexToDirection(idx)) line.push(' ');
      else if (direction === this.#bridge[line.length]) line.push('O');
      else line.push('X');
    });
  }

  mapIndexToDirection(idx) {
    switch (idx) {
      case 0:
        return 'U';
      case 1:
        return 'D';
      default:
        return -1;
    }
  }

  getGameState() {
    let state =
      this.#map[0].length === this.#bridge.length ? GAME_STATE.SUCCEEDED : GAME_STATE.ONGOING;
    this.#map.forEach(line => {
      if (line.includes('X')) {
        state = GAME_STATE.FAILED;
      }
    });

    return state;
  }

  getMap() {
    return this.#map;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
