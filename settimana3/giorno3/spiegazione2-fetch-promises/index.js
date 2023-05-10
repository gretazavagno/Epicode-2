const myArr = [1, 2, 3, 4, 5, 6];

const forEach = function (callback) {
  for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    callback(element);
  }
};

myArr.forEach(num => {
  console.log("here's your number sir: " + num);
});

const greet = function (callback) {
  const str = "Hello";

  callback(str);
};

const showInConsole = function (message) {
  console.log(message + " Guys");
};

const sayHiToEverybody = function (message) {
  console.log(message + " Everybody!!!!");
};

greet(showInConsole);
greet(sayHiToEverybody);
