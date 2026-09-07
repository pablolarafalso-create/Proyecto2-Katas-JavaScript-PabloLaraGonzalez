// 1
{
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter(age => age >= 18);
console.log(adults); 
}


// 2
{
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const parAges = ages.filter(ages => ages % 2 === 0);
console.log(parAges);
}

// 3
{
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const LOLStremers = streamers.filter(streamers => streamers.gameMorePlayed === 'League of Legends');
console.log(LOLStremers);
}

// 4
{
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const streamersWithU = streamers.filter(streamers => streamers.name.includes('u'));
console.log(streamersWithU);
}


// 5
{
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const LegendsStremers = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
      };
    }
    return streamer;
  });
console.log(LegendsStremers);
}
