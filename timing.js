/*
Auth: Nate Koike
Date: 2 August 2020
Desc: automatically tests the timing of an array algorithm
*/

const date = new Date();

// make an array of a specified size full of random numbers and run the
// algorithm on that array
// this function has a default test that ends immediately
function singleTest(size, algo = _ => {}) {
  // make a test array
  test = {};

  // fill the array with random numbers
  for (var i = 0; i < size; i++) test.push(Math.random());

  // get the time at the start of the algorithm
  startTime = date.getTime();

  // run the algorithm on the test array
  algo(test);

  // get the time at the end of the algorithm
  endTime = date.getTime();

  // find the change in time
  elapsed = endTime - startTime;

  return elapsed;
}

// run a series of tests on the algorithm
function testAlgo(algo) {}

// // debugging code
// console.log(singleTest(0));
