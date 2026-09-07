// 1
{
const users = [ {id: 1, name: 'Abel'}, {id:2, name: 'Julia'}, {id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
const usersName = users.map(user => user.name);
console.log(usersName);
}


// 2
{
const users = [{id: 1, name: 'Abel'}, {id: 2, name: 'Julia'}, {id: 3, name: 'Pedro'}, {id: 4, name: 'Amanda'}];
const result = users.map(user => {
  if (user.name.startsWith('A')) {
    return 'Anacleto';
  }
  return user.name;
});
console.log(result);
}


// 3
{
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},	{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
const visitedCities = cities.map(city => {
    if (city.isVisited) {
        return city.name + '(Visitado)';
    }else{
        return city.name;
    }
});
console.log(visitedCities);
}
