export const calcs = {
  mode,
  sum,
  min,
  max,
  average,
  median
};

function mode(a) {
  a = a.slice().sort((x, y) => x - y);

  var bestStreak = 1;
  var bestElem = a[0];
  var currentStreak = 1;
  var currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
}

function sum(a) {
  return a.reduce((partialSum, a) => partialSum + a, 0);
}

function min(arr) {
  return arr.reduce(function (p, v) {
    return p < v ? p : v;
  });
}

function max(arr) {
  return arr.reduce(function (p, v) {
    return p > v ? p : v;
  });
}

function average(a){
    let sum = a.reduce((partialSum, a) => partialSum + a, 0);
    return ((sum / a.length) || 0).toFixed(2);
}

function median(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
  }