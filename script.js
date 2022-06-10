function checkKnightPosition(position) {
  const chessArray = [];
  const interfaceArr = [];

  let rowCount = 1;
  let columnCount = 1;

  [...Array(65).keys()].slice(1).forEach((_, i) => {
    chessArray.push({
      number: i + 1,
      columnPosition: columnCount,
      rowPosition: rowCount,
    });
    if ((i + 1) % 8 === 0) {
      columnCount = 1;
      rowCount++;
    } else {
      columnCount++;
    }
  });

  const knightObject = chessArray.find((cur) => cur.number === position);

  const checkLeft = (knightObject) => {
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
  };

  const checkRight = (knightObject) => {
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
  };

  const checkButtom = (knightObject) => {
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
  };

  const checkTop = (knightObject) => {
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
  };

  [
    ...checkLeft(knightObject),
    ...checkRight(knightObject),
    ...checkTop(knightObject),
    ...checkButtom(knightObject),
  ].forEach((cur) => {
    if (cur) {
      console.log(
        `The knight can move to a position of (${cur.rowPosition} x ${cur.columnPosition})`
      );
      interfaceArr.push(cur.number.toString());
    }
  });

  return interfaceArr;
}
const allTilesArr = document.querySelectorAll(".tile");

allTilesArr.forEach((tile, i) => {
  tile.addEventListener("click", function (e) {
    allTilesArr.forEach((tile) => tile.classList.remove("color-blue"));
    const interfaceArr = checkKnightPosition(+e.target.dataset.tile);

    interfaceArr.forEach((pos) => {
      allTilesArr[+pos - 1].classList.add("color-blue");
    });
  });
});

document.querySelector(".restart").addEventListener("click", function () {
  allTilesArr.forEach((tile) => tile.classList.remove("color-blue"));
});
