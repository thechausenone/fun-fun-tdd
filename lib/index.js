const map = (array, fxn) => {
  let result =[];

  for(let i = 0; i < array.length; i++) {
    result.push(fxn(array[i]));
  }

  return result;
}

const reduce = (array, fxn, initial = 0) => {
  let result = initial;

  for (let i = 0; i < array.length; i++) {
    result = fxn(result, array[i]);
  }

  return result;
}

const mapUsingReduce = (array, fxn) => {
  let result;
  let reduceFxn = (acc, number) => [...acc, fxn(number)];

  result = reduce(array, reduceFxn, []);

  return result;
}

module.exports = {
  map,
  reduce,
  mapUsingReduce
}
