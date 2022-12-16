const QUERY = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const ERROR_MSG = Object.freeze({
  NOT_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  BRIDGE_SIZE_RANGE: '[ERROR] 3 ~ 20 사이의 숫자만 입력할 수 있습니다.',
  INVALID_DIRECTION: '[ERROR] U 혹은 D 만 입력할 수 있습니다.',
  INVALID_GAME_COMMAND: '[ERROR] R 혹은 Q 만 입력할 수 있습니다.',
});

module.exports = { QUERY, ERROR_MSG };
