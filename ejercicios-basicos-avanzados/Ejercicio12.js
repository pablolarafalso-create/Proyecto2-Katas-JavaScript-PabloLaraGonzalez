const duplicates = [ 'sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];

function removeDuplicates(list) {
  const uniqueElements = [];


  list.forEach((item) => {
    if (!uniqueElements.includes(item)) {
      uniqueElements.push(item);
    }
  });


  return uniqueElements;
}

console.log(removeDuplicates(duplicates));