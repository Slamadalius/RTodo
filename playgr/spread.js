// function add (a, b) {
//  return a + b;
// }
//
// console.log(add(2, 3));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Gedas', 'Joe'];
// var groupB = ['Alex'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Dalius', 22];
var person2 = ['Gedas', 24];

function greet (name, age) {
  console.log('hi ' + name + ', you are ' + age + ' years old');
}
greet(...person);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Dalius', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
