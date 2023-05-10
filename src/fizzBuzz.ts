export const fizzBuzz = (numberInitial: number, numberFinal: number) => {
  let arrayContentsNumbers = [];
  for (let index = numberInitial; index <= numberFinal; index++) {
    arrayContentsNumbers.push(index);
    if (index % 3 === 0) {
      arrayContentsNumbers.pop();
      arrayContentsNumbers.push("Fizz");
    }
    if (index % 5 === 0) {
      arrayContentsNumbers.pop();
      arrayContentsNumbers.push("Buzz");
    }
    if (index % 3 === 0 && index % 5 === 0) {
      arrayContentsNumbers.pop();
      arrayContentsNumbers.push("FizzBuzz");
    }
  }
  return arrayContentsNumbers;
};
