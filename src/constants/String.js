const QUERY = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
});

const ERROR_MSG = Object.freeze({
  NOT_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  BRIDGE_SIZE_RANGE: '[ERROR] 3 ~ 20 사이의 숫자만 입력할 수 있습니다.',
});

module.exports = { QUERY, ERROR_MSG };
