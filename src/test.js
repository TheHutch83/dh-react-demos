function work(start) {
  let answer = start;
  for (let i = 0; i < 99999999; i++) {
    answer++;
  }
  return answer;
}

function memo(func) {
  const cache = {};

  return (value) => {
    if (cache[value]) {
      return cache[value];
    }

    const answer = func(value);
    cache[value] = answer;
    return answer;
  };
}

const memoVersionOfFunction = memo(work);
const anotherMomod = memo((value) => {});

const start = Data.now();
memoVersionOfFunction(100);

console.log(Date.now() - start);
