
exports.min = function min (array) {
  if (!array || !array.length) {
  return 0;
}
  return Math.min.apply(null, array)
}

exports.max = function max (array) {
  if (!array || !array.length) {
  return 0;
}
  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
  return 0;
}
  let arraySum = 0;
  for (i = 0; i < array.length; i++){
    arraySum += array[i]
  }
  return arraySum / i;
}
