// TODO: Always sorted: i < j   =>   solved[i] <= solved[j]
const solved: number[] = [];

function save() {}

function load() {}

function addSolved(lvl: number) {
  solved.push(lvl);
}

function isSolved(lvl: number) {
  return solved.includes(lvl);
}

function getInfoAboutInterval(from: number, to: number) {
  const countInInterval = to - from + 1;
  let solvedInInterval = 0;
  for (let x of solved) {
    if (from <= x && x <= to) {
      solvedInInterval++;
    }
  }
  let stars = 0;
  if (solvedInInterval >= countInInterval / 4) {
    stars = 1;
  }
  if (solvedInInterval >= countInInterval / 2) {
    stars = 2;
  }
  if (solvedInInterval === countInInterval) {
    stars = 3;
  }
  return {
    solvedInInterval,
    stars,
  };
}

export const levelManager = {
  save,
  load,
  isSolved,
  addSolved,
  getInfoAboutInterval,
};
