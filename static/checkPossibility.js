export function checkLeft(knightObject) {
  const leftPossibleTop = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition - 2 &&
      cur.rowPosition === knightObject.rowPosition - 1
  );
  const leftPossibleBottom = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition - 2 &&
      cur.rowPosition === knightObject.rowPosition + 1
  );

  return [leftPossibleBottom, leftPossibleTop];
}

export function checkRight(knightObject) {
  const rightPossibleTop = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition + 2 &&
      cur.rowPosition === knightObject.rowPosition - 1
  );
  const rightPossibleBottom = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition + 2 &&
      cur.rowPosition === knightObject.rowPosition + 1
  );

  return [rightPossibleBottom, rightPossibleTop];
}

export function checkButtom(knightObject) {
  const bottomPossibleLeft = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition - 1 &&
      cur.rowPosition === knightObject.rowPosition + 2
  );
  const bottomPossibleRight = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition + 1 &&
      cur.rowPosition === knightObject.rowPosition + 2
  );

  return [bottomPossibleRight, bottomPossibleLeft];
}

export function checkTop(knightObject) {
  const topPossibleLeft = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition - 1 &&
      cur.rowPosition === knightObject.rowPosition - 2
  );
  const topPossibleRight = chessArray.find(
    (cur) =>
      cur.columnPosition === knightObject.columnPosition + 1 &&
      cur.rowPosition === knightObject.rowPosition - 2
  );

  return [topPossibleRight, topPossibleLeft];
}
