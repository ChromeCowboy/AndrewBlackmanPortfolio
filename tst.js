const c = document.querySelector(".c");

class LateBloomer {
  constructor(x, petalCount, c) {
    this.x = "z";
    this.petalCount = Math.floor(Math.random() * 12) + 1;
    this.c = 2;
  }
  bloom() {
    // this.declare refers to the function declare.  then bind any this variable, so it can be used in template literal
    window.setTimeout(this.declare.bind(this), 4000);
  }
  declare() {
    c.innerHTML = `<p>I am a beautiful${this.x} flower with ${this.petalCount} petals!</p>`;
  }
}

// Declare bloom after a delay of 1 second

const flower = new LateBloomer();
flower.bloom();

//  after 4 second, calls 'flower.declare()'

// - - - - - - - - - - - - - - -  - - --  - - - - - - - - - - - - - - - - - - - -

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

class Point {
  // spreads anything after x, y.  spread operator can only be used at end.
  constructor(x, y, ...z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  toString() {
    return `${this.x},${this.y}, ${this.z}`;
  }
  add() {
    return this.x + this.y + this.z;
  }
}

const b = new Point(arr1, 88, arr2);

let q = [];
Object.entries(b).forEach(([key, value]) => {
  q = [key];
  let c = value;
});

const a = new Point(1, 2, 3);

const emptyObj = {};
// bind(thisArg, arg1, arg2)
// new class because binding new numbers to it
const YAxisPoint = Point.bind(emptyObj, 1 /*x*/, 2);

const axisPoint = new YAxisPoint(3);

function p(x) {
  this.x = 2;
  console.log(this.x);
}
p();

// - - - - - - - - - -  - - - - - - - - - - - - - - - - - - -
// recursive function .  countdown.
// - - - - - - - - - -  - - - - - - - - - - - -
// function countDown(num) {
//   if (num > 0) {
//     c.innerHTML = num.toString();
//     setTimeout(function () {
//       countDown(num - 1);
//     }, 500);
//   }
// }

// countDown(10);
