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
function merge(first, last, cond = (x, y) => true) {
  // the final array
  var result = [];

  // while both arrays are full
  while (first.length > 0 && last.length > 0) {
    // if the first item of the first array meets the condition
    if (cond(first[0], last[0])) {
      // add the first element of the first array to the result
      result.push(first[0]);

      // remove the first element from the array
      first = first.slice(1);
    } else {
      // add the first element of the last array to the result
      result.push(last[0]);

      // remove the first element from the array
      last = last.slice(1);
    }
  }

  // one array is empty
  // if the first array is empty
  if (first == [])
    // dump every element in the last array into the result
    for (var i = 0; i < last.length; i++) result.push(last[i]);
  // dump every element in the first array into the result
  else for (var i = 0; i < first.length; i++) result.push(first[i]);

  return result;
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

  console.log(front);

  // merge the front and rear of the array and return
  return merge(front, rear);
}

// should be: [1, 2, 3, 4, 5, 6]
console.log(sort([2, 3, 1, 5, 4, 6]));
