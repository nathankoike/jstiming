/*
Auth: Nate Koike
Date: 2 August 2020
Desc: Merge sort
*/

// compare two items and return True if the first item meets the condition while
// returning False if the second item meets the condition
function sortCondition(first, last) {
  return first < last;
}

// merge two arrays into one
// this function has a condition that always returns True
function merge(first, last, cond = (_, _) => True) {
  // the final array
  var result = [];

  // while both arrays are full
  while (first != [] && last != []) {
    // if the first item of the first array meets the condition
    if (cond(first[0], last[0])) {
      result.push(first[0]);
    }
  }
}

function sort(ary) {
  // check to see if the array is minimal
  if (ary.length < 2) return ary;

  // split the array in half
  var front = ary.slice(0, Math.floor(ary.length / 2));
  var rear = ary.slice(Math.floor(ary.length / 2), ary.length);

  // sort the front and rear of the array
  front = sort(front);
  rear = sort(rear);

  // merge the front and rear of the array and return
  return merge(front, rear);
}
