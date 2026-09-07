const words = [ 'code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'sleep', 'code'];

function repeatCounter(list) {
  const counter = {};

  list.forEach((word) => {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  });


  return counter;
}

console.log(repeatCounter(words));