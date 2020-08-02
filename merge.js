/*
Auth: Nate Koike
Date: 2 August 2020
Desc: Merge sort
*/

function sort(ary) {
  // check to see if the array is minimal
  if (ary.length < 2) return ary;

  // sort the array
  var front = ary.slice(0, Math.floor(ary.length / 2));
  var rear = ary.slice(Math.floor(ary.length / 2), ary.length);

  front = sort(front);
  rear = sort(rear);

  return merge(front, rear);
}
