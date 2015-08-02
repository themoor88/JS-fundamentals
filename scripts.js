//Use this file to implement your project
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





