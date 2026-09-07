const mixedElements = [  6,  1,  "Marvel",  1,  "hamburguesa",  "10",  "Prometeo",  8,  "Hola mundo",];

function averageWord(list) {
  let totalSum = 0;

  for (let i = 0; i < list.length; i++) {
    const currentElement = list[i];

    if (typeof currentElement === "number") {
      totalSum += currentElement;
    } 

    else if (typeof currentElement === "string") {
      totalSum += currentElement.length;
    }
  }


  return totalSum / list.length;
}


console.log(averageWord(mixedElements));