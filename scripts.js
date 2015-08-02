//Use this file to implement your project
// Exercise 1
var animal = {};

animal.username = "Daffyduck";

animal["tagline"] = "quack";

var noises = [];

animal.noises = noises;

console.log(animal);

var count = 0;
for (var key in animal) {
  count ++;
  if (key === 'username') {
    console.log('Hi my name is ' + animal[key]);
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
}

// Exercise 2
var noiseArray = ['purr'];

noiseArray.unshift('hiss');
noiseArray.push('meow');

noiseArray[3] = 'growl';

console.log(noiseArray.length);

console.log(noiseArray);

animal.noises = noiseArray;

var animals = [];

animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

animals[animals.length] = quackers;

console.log(animals);

var dog = {
  username: 'Kobasu',
  tagline: 'Such profile',
  noises: ['bark', 'woof', 'wow!']
}

var honeyBadger = {};
honeyBadger.username = 'Randall';
honeyBadger.tagline = 'Honey badger dont care';
honeyBadger.noises = ['screech', 'growl'];

animals.push(dog, honeyBadger);

console.log(animals.length);

// Exercise 3
function AnimalTestUser(username) {
  var args = arguments.length;
  var otherArgs = [];
  if (args > 1) {
    for (var i = 1; i < args; i++) {
      otherArgs.push(arguments[i]);
    }
  }

  return {
    username: username,
    otherArgs: otherArgs
  };
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1, 2, 4]);
console.log(testSheep);

function AnimalCreator(username, species, tagline, noises) {
  return {
    username: username,
    species: speecies,
    tagline: tagline,
    noises: noises,
    friends: []
  };
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

function addFriend(animal, friend) {
  animal.friends.push(friend);
}

var cow = AnimalCreator('Moo', 'Cow', 'got milk?', ['moo', 'moooo']);
console.log(cow);

var llama = AnimalCreator('Zeny', 'llama', 'lllll', ['sdf', 'sdfsf']);
console.log(llama);
addFriend(sheep, cow);
console.log(sheep)
addFriend(sheep, llama);
console.log(sheep);

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

function addMatchesArray(farm) {
  for (var animal in farm) {
    farm[animal].matches = [];
  }
}

addMatchesArray(myfarm);
console.log(myFarm[0]);

function giveMatches(farm) {
  for (var animal in farm) {
    farm[animal].matches.push(farm[animal].friends[0]);
  }
}

giveMatches(myFarm);
console.log(myFarm[0]);