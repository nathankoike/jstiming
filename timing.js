/*
Auth: Nate Koike
Date: 2 August 2020
Desc: automatically tests the timing of an array algorithm
*/

const merge = require("./merge");
// the maximum number of things in an dummy array
const max = 2 ** 20;

// make an array of a specified size full of random numbers and run the
// algorithm on that array
// this function has a default test that ends immediately
function singleTest(size, algo = _ => {}) {
  // make a test array
  var test = [];

  // fill the array with random numbers
  for (var i = 0; i < size; i++) test.push(Math.random());

  // get the time at the start of the algorithm
  var date = new Date();
  const startTime = date.getTime();

  // run the algorithm on the test array
  algo(test);

  // get the time at the end of the algorithm
  date = new Date();
  const endTime = date.getTime();

  // find the change in time
  const elapsed = endTime - startTime;

  return elapsed;
}

// run a series of tests on the algorithm
// this function has a default test that ends immediately
function testAlgo(algo = _ => {}) {
  // make an array to hold the results of the tests
  var results = [];

  // run a series of tests on the algorithm
  for (var size = 1; size < max; size *= 2)
    // push the result onto the array
    results.push(singleTest(size, algo));

  return results;
}

// test the built-in sort method for arrays
function testBase() {
  var results = [];
  for (var size = 1; size < max; size *= 2) {
    var test = [];
    for (var i = 0; i < size; i++) test.push(Math.random());

    var date = new Date();
    const st = date.getTime();

    test.sort();

    date = new Date();
    const et = date.getTime();

    results.push(et - st);
  }

  return results;
}

// print the times nicely
function printTimes(times) {
  for (var i = 0; i < times.length; i++) {
    console.log("input size: ", 2 ** i);
    console.log(" time (ms): ", times[i]);
    console.log();
  }
}

// // debugging code
// console.log(testAlgo(merge.sort));
// console.log(testBase());

// test coded algo
printTimes(testAlgo(merge.sort));
